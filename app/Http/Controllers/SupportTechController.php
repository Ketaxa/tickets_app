<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SupportTechController extends Controller
{
    private function checkAccess()
    {
        if (!Session::get('logged_in') || Session::get('role') !== 'tech') {
            abort(403);
        }
    }

    public function index(Request $request)
    {
        $this->checkAccess();

        $search = trim($request->query('search',''));
        $tab    = $request->query('tab','active');
        $sort   = $request->query('sort','answered');

        $tickets = Ticket::query()
            ->when($tab === 'archive',
                fn($q) => $q->where('status','closed'),
                fn($q) => $q->whereIn('status',['new','answered'])
            )
            ->when($search !== '',
                fn($q) => $q->where(function($qq) use ($search){
                    $qq->where('user_id_or_email','like',"%$search%")
                       ->orWhere('id','like',"%$search%");
                })
            )
            ->orderByRaw(
                $sort === 'date'
                ? 'created_at DESC'
                : "FIELD(status,'answered') ASC, created_at DESC"
            )
            ->get();

        $current_ticket = null;

        if ($request->has('id')) {
            $current_ticket = Ticket::find($request->id);
        }

        return view('support.tech', compact(
            'tickets',
            'current_ticket',
            'search',
            'tab',
            'sort'
        ));
    }

    public function sendMessage(Request $request)
    {
        $this->checkAccess();

        $ticket = Ticket::findOrFail($request->ticket_id);

        $chat = json_decode($ticket->chat_messages ?? '[]', true);
        if (!is_array($chat)) $chat = [];

        $chat[] = [
            'id' => uniqid(),
            'role' => 'tech',
            'text' => $request->message,
            'timestamp' => now()->format('Y-m-d H:i:s')
        ];

        $ticket->chat_messages = json_encode($chat, JSON_UNESCAPED_UNICODE);
        $ticket->status = 'answered';
        $ticket->save();

        return redirect()->route('support.tech', ['id'=>$ticket->id]);
    }

    public function close($id)
    {
        $this->checkAccess();
        Ticket::where('id',$id)->update(['status'=>'closed']);
        return redirect()->route('support.tech');
    }

    public function reopen($id)
    {
        $this->checkAccess();
        Ticket::where('id',$id)->update(['status'=>'new']);
        return redirect()->route('support.tech',['id'=>$id]);
    }
}

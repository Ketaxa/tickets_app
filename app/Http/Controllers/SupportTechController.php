<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use App\Services\CheckAuth;
use App\Services\ControlTicketsStatus;
use App\Services\SendMessage;

class SupportTechController extends Controller
{
    protected $allowedFileExt = ['jpg', 'jpeg', 'png', 'pdf', 'zip', 'txt'];
    public function __construct(
        protected CheckAuth $checkAuth,
        protected ControlTicketsStatus $controlTicketsStatus,
        protected SendMessage $sendMessage,
    ) {}
    public function index(Request $request)
    {
    
    /** 
     * Проверка авторизации через сервис
     */ 
        if (!$this->checkAuth->checkAuth()) {
    abort(403, 'Доступ запрещён');
}
        $search = trim($request->query('search', ''));
        $tab = $request->query('tab', 'active');
        $sort = $request->query('sort', 'answered');

        $tickets = Ticket::query()
            ->when($tab === 'archive',
                fn ($q) => $q->where('status', 'closed'),
                fn ($q) => $q->whereIn('status', ['new', 'answered'])
            )
            ->when($search !== '',
                fn ($q) => $q->where(function ($qq) use ($search) {
                    $qq->where('user_id_or_email', 'like', "%$search%")
                        ->orWhere('id', 'like', "%$search%");
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

        $current_ticket = Ticket::find($request->id);
        $chatMessages = [];

        if ($current_ticket) {
            $chatMessages = json_decode($current_ticket->chat_messages ?? '[]', true);
            if (! is_array($chatMessages)) {
                $chatMessages = [];
            }
        }

        return view('support.tech', compact(
            'tickets',
            'current_ticket',
            'chatMessages',
            'search',
            'tab',
            'sort'
        ));

    }

    /**
     * Ф-я отправки сообщений
     */
    public function sendMessage(Request $request)
    {
        if (!$this->checkAuth->checkAuth()) {
    abort(403, 'Доступ запрещён');
}

        $ticketId = (int) $request->input('ticket_id', 0);

        $messageText = trim($request->input('message', '')); 
        $filePath = null;

        if ($request->hasFile('chat_file')) {
            $file = $request->file('chat_file');
            if (in_array($file->getClientOriginalExtension(), $this->allowedFileExt, true)) {
                $filePath = $file->store('uploads', 'public');
            }
        }

        $this->sendMessage->sendMessage($ticketId, $messageText, $filePath);

        return redirect('/support/tech?id='.$ticketId);
    }

        /**
     * Ф-я закрытия тикета
     */
    public function close($id)
    {
        $this->controlTicketsStatus->closeTicket($id);
        if (!$this->checkAuth->checkAuth()) {
    abort(403, 'Доступ запрещён');
}
        return redirect()->route('support.tech');
    }

        /**
     * Ф-я открытия тикета
     */
    public function reopen($id)
    {
        if (!$this->checkAuth->checkAuth()) {
    abort(403, 'Доступ запрещён');
}

       $this->controlTicketsStatus->reopenTicket($id);
        return redirect()->back();
    }
}

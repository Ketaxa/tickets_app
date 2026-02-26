<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Services\CheckAuth;
use App\Services\ControlTicketsStatus;
use App\Services\SendMessage;
use Illuminate\Http\Request;

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

    $currentTicket = $request->has('id') ? Ticket::find($request->id) : null;
    $chatMessages = $currentTicket ? json_decode($currentTicket->chat_messages ?? '[]', true) ?? [] : [];

    return inertia('TechPage', [
        'tickets' => $tickets,
        'currentTicket' => $currentTicket,
        'chatMessages' => $chatMessages,
        'tab' => $tab,
        'sort' => $sort,
        'search' => $search,
        'baseUrl' => '/tech',
    ]);
}
//     public function index(Request $request)
//     {
//         $search = trim($request->query('search', ''));
//         $tab = $request->query('tab', 'active');
//         $sort = $request->query('sort', 'answered');

//         $tickets = Ticket::query()
//             ->when($tab === 'archive',
//                 fn ($q) => $q->where('status', 'closed'),
//                 fn ($q) => $q->whereIn('status', ['new', 'answered'])
//             )
//             ->when($search !== '',
//                 fn ($q) => $q->where(function ($qq) use ($search) {
//                     $qq->where('user_id_or_email', 'like', "%$search%")
//                         ->orWhere('id', 'like', "%$search%");
//                 })
//             )
//             ->orderByRaw(
//                 $sort === 'date'
//                 ? 'created_at DESC'
//                 : "FIELD(status,'answered') ASC, created_at DESC"
//             )
//             ->get();

//         $current_ticket = null;

//         if ($request->has('id')) {
//             $current_ticket = Ticket::find($request->id);
//         }

//         $current_ticket = Ticket::find($request->id);
//         $chatMessages = [];

//         if ($current_ticket) {
//             $chatMessages = json_decode($current_ticket->chat_messages ?? '[]', true);
//             if (! is_array($chatMessages)) {
//                 $chatMessages = [];
//             }
//         }

//                 return inertia('TechPage', [
//     'tickets' => $tickets,
//     'currentTicket' => $current_ticket,
//     'chatMessages' => $chatMessages,
//     'tab' => $tab,
//     'sort' => $sort,
//     'search' => $search,
//     'baseUrl' => '/tech',
// ]);

//     }

    /**
     * Ф-я отправки сообщений
     */
    public function sendMessage(Request $request)
    {

        $ticketId = (int) $request->input('ticket_id', 0);

        $messageText = trim($request->input('message', ''));
        $filePath = null;

        if ($request->hasFile('chat_file')) {
            $file = $request->file('chat_file');
            if (in_array($file->getClientOriginalExtension(), $this->allowedFileExt, true)) {
                $filePath = $file->store('uploads', 'public');
            }
        }

        $msgRole = $request->session()->get('role');
        $this->sendMessage->sendMessage($ticketId, $messageText, $filePath, $msgRole);
        return redirect()->route('tech.message', ['ticket_id' => $ticketId]);

        // return redirect('/support/tech?id='.$ticketId);
    }

    /**
     * Ф-я закрытия тикета
     */
    public function close(Request $request)
    {
        $ticketId = $request->input('ticket_id');
        $this->controlTicketsStatus->closeTicket($ticketId);

        return redirect()->route('tech');
    }

    /**
     * Ф-я открытия тикета
     */
    public function reopen(Request $request)
    {

        $ticketId = $request->input('ticket_id');
        $this->controlTicketsStatus->reopenTicket($ticketId);

        return redirect()->back();
    }

        public function showMessage(Request $request)
    {
        $ticketId = (int) $request->query('ticket_id', 0);
        $ticket = Ticket::find($ticketId);
        if (!$ticket) {
            abort(404);
        }
        $chatMessages = json_decode($ticket->chat_messages ?? '[]', true);
        return inertia('TechDialogue', [
    'ticket' => $ticket,
    'initialMessages' => $chatMessages,
    'baseUrl' => '/tech',
]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Ticket;
// use App\Services\CheckAuth;
use App\Services\CheckSubscription;
use App\Services\ControlTicketsStatus;
use App\Services\SendMessage;
use App\Services\TicketService;
use Illuminate\Http\Request;

class SupportAgentController extends Controller
{
    protected $allowedFileExt = ['jpg', 'jpeg', 'png', 'pdf', 'zip', 'txt'];

    /**
     * Инициализация сервисов
     */
    public function __construct(
        // protected CheckAuth $checkAuth,
        protected TicketService $tickets,
        protected CheckSubscription $subscriptionService,
        protected ControlTicketsStatus $controlTicketsStatus,
        protected SendMessage $sendMessage,
    ) {}

    /**
     * Список тикетов и чат
     */
    public function index(Request $request)
    {

        $search = trim($request->query('search', ''));
        $tab = $request->query('tab', 'active');
        $sort = $request->query('sort', 'answered');

        /**
         * Получение тикетов через сервис
         */
        $tickets = $this->tickets->getTickets($search, $tab, $sort);

        $ticketId = (int) $request->query('id', 0);
        $currentTicket = $ticketId ? Ticket::find($ticketId) : null;
        $chatMessages = $currentTicket ? json_decode($currentTicket->chat_messages ?? '[]', true) : [];

        return inertia('AgentPage', [
    'tickets' => $tickets,
    'currentTicket' => $currentTicket,
    'chatMessages' => $chatMessages,
    'tab' => $tab,
    'sort' => $sort,
    'search' => $search,
        'baseUrl' => '/agent',
]);
    }

    /**
     * Функция проверки подписки
     */
    public function checkSubscription(Request $request)
    {
        /**
         * Валидация
         */
        $request->validate([
            'sub_user_id' => 'required|integer',
        ]);

        $userId = $request->input('sub_user_id');

        /**
         * Использование сервиса чека подписки
         */
        $resultSubscribes = $this->subscriptionService->checkSubscription($userId);

        /**
         * Вывод результата
         */
    return redirect()->back()->with([
    'subscription_result_text' => $resultSubscribes['text'],
    'subscription_result_type' => $resultSubscribes['type'],
    // 'open_sub_modal' => true,
]);
    }

    /**
     * Ф-я закрытия тикета
     */
    public function closeTicket(Request $request)
    {
        $ticketId = $request->input('ticket_id');
        $this->controlTicketsStatus->closeTicket($ticketId);

        return redirect()->route('agent');
    }

    /**
     * Ф-я открытия тикета
     */
    public function reopenTicket(Request $request)
    {

        $ticketId = $request->input('ticket_id');
        $this->controlTicketsStatus->reopenTicket($ticketId);

        return redirect()->back();
    }

    /**
     * Ф-я создания тикета
     */
    public function createTicket(Request $request)
    {

        /**
         * Валидация
         */
        $validated = $request->validate([
            'user_id_or_email' => 'required|string',
            'short_desc' => 'required|string',
            'full_desc' => 'required|string',
            'file' => 'nullable|file',
        ]);

        /**
         * Пер-я для передачи в арг-ты функции создания тикета сервиса
         */
        $ticketsCreate = [
            'user_id_or_email' => $validated['user_id_or_email'],
            'short_desc' => $validated['short_desc'],
            'full_desc' => $validated['full_desc'],
            'file' => $request->file('file'),
        ];

        $this->tickets->createTickets($ticketsCreate);

        return redirect('/agent');
    }

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
                $path = $file->store('uploads', 'public');
                $filePath = Storage::disk('public')->url($path) ;

            }
        }

        $msgRole = $request->session()->get('role');
        $this->sendMessage->sendMessage($ticketId, $messageText, $filePath, $msgRole);
        return redirect()->route('agent.message', ['ticket_id' => $ticketId]);

    }

    /**
     * Ф-я получения диалога тикета
     */
    public function showMessage(Request $request)
    {
        $ticketId = (int) $request->query('ticket_id', 0);
        $ticket = Ticket::find($ticketId);
        if (!$ticket) {
            abort(404);
        }
        $chatMessages = json_decode($ticket->chat_messages ?? '[]', true);
        return inertia('AgentDialogue', [
    'ticket' => $ticket,
    'initialMessages' => $chatMessages,
        'baseUrl' => '/agent',

]);
    }
}

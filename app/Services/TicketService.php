<?php

namespace App\Services;

use App\Models\Ticket;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Services\TelegramService;

class TicketService
{
    protected $allowedFileExt = ['jpg', 'jpeg', 'png', 'pdf', 'zip', 'txt'];
    protected TelegramService $telegramService;

    public function __construct(TelegramService $telegramService)
    {
        $this->telegramService = $telegramService;
    }
    /**
     * Ф-я получения тикетов и сортировки
     */
    public function getTickets(string $search,
        string $tab,
        string $sort)
    {
        /**
         * Запрос на тикеты
         */
        $tickets = Ticket::query()
            ->when($tab === 'archive', fn ($q) => $q->where('status', 'closed'))
            ->when($tab !== 'archive', fn ($q) => $q->whereIn('status', ['new', 'answered']))
            ->when($search !== '', function ($q) use ($search) {
                $q->where(function ($query) use ($search) {
                    if (is_numeric($search)) {
                        $query->where('id', (int) $search);
                    } else {
                        $query->where('user_id_or_email', 'like', "%{$search}%");
                    }
                });
            });


        /**
         * Ф-я сортировки
         */
        if ($sort === 'date') {
            $tickets = $tickets->orderBy('created_at', 'desc');
        } else {
            $tickets = $tickets->orderByRaw("FIELD(status,'answered') ASC")
                ->orderBy('created_at', 'desc');
        }

        return $tickets->get();
    }

    /**
     * Сервис создания тикета
     */
    public function createTickets(array $data)
    {
    $path = null;
    $filePath = null;

            /**
         * Условие на наличие файла в тикете
         */
        if (! empty($data['file'])) {
            $file = $data['file'];
            if (in_array($file->getClientOriginalExtension(), $this->allowedFileExt, true)) {
            $path = $file->store('uploads', 'public');    
            $filePath = Storage::disk('public')->url($path);
            }
        }
        
    $initialMessage = [
    [
        'id' => uniqid('m_', true),
        'role' => 'support',
        'text' => $data['full_desc'],
        'file' => $filePath,
        'timestamp' => now()->toDateTimeString(),
    ]
];


        $ticket = Ticket::create([
        'user_id_or_email' => $data['user_id_or_email'],
        'short_desc' => $data['short_desc'],
        'full_desc' => $data['full_desc'],
        'chat_messages' => json_encode($initialMessage, JSON_UNESCAPED_UNICODE),
        'file_path' => $filePath,
        'status' => 'new',
    ]);

    $message = "Новый тикет: #{$ticket->id} - {$ticket->short_desc}";
    $this->telegramService->sendMessageToAll($message);

    return $ticket;
    }
}

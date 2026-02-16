<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SupportAgentController extends Controller
{
    protected $allowedFileExt = ['jpg', 'jpeg', 'png', 'pdf', 'zip', 'txt'];

    // Проверка авторизации прямо в методе
    protected function checkAuth()
    {
        if (! Session::get('logged_in') || Session::get('role') !== 'support') {
            abort(403, 'Доступ запрещён');
        }
    }

    // Список тикетов и чат
    public function index(Request $request)
    {
        $this->checkAuth();

        $search = trim($request->query('search', ''));
        $tab = $request->query('tab', 'active');
        $sort = $request->query('sort', 'answered');

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

        if ($sort === 'date') {
            $tickets = $tickets->orderBy('created_at', 'desc');
        } else {
            $tickets = $tickets->orderByRaw("FIELD(status,'answered') ASC")
                ->orderBy('created_at', 'desc');
        }

        $tickets = $tickets->get();

        $ticketId = (int) $request->query('id', 0);
        $currentTicket = $ticketId ? Ticket::find($ticketId) : null;
        $chatMessages = $currentTicket ? json_decode($currentTicket->chat_messages ?? '[]', true) : [];

        return view('support.agent', compact('tickets', 'currentTicket', 'chatMessages', 'tab', 'sort', 'search'));
    }

    public function checkSubscription(Request $request)
    {
        $request->validate([
            'sub_user_id' => 'required|integer',
        ]);

        $userId = $request->input('sub_user_id');

        $subscription = Subscription::where('user_id', $userId)->first();

        $resultText = '';
        $resultType = '';

        if (! $subscription) {
            $resultText = 'Подписка не найдена';
            $resultType = 'info';
        } elseif ($subscription->status === 'active') {
            $expiresAt = $subscription->expires_at
                ? $subscription->expires_at->format('d.m.Y H:i')
                : 'неизвестно';
            $autoRenew = $subscription->auto_renewal ? 'включено' : 'отключено';
            $resultText = "Подписка активна до {$expiresAt}, автопродление {$autoRenew}";
            $resultType = 'success';
        } elseif ($subscription->status === 'pending') {
            $createdAt = $subscription->created_at->format('d.m.Y H:i');
            $resultText = "Попытка оформления подписки {$createdAt}, но не завершилась успехом";
            $resultType = 'warning';
        } elseif ($subscription->status === 'canceled') {
            $resultText = 'Подписка отключена';
            $resultType = 'danger';
        } else {
            $resultText = 'Статус подписки не распознан';
            $resultType = 'info';
        }

        return redirect()->back()
            ->withInput()
            ->with([
                'subscription_result_text' => $resultText,
                'subscription_result_type' => $resultType,
                'open_sub_modal' => true,
            ]);
    }

    public function closeTicket(Request $request)
    {
        $this->checkAuth();
        $ticketId = $request->input('ticket_id');
        $ticket = Ticket::find($ticketId);
        if ($ticket) {
            $ticket->status = 'closed';
            $ticket->save();
        }

        return redirect()->route('support.agent');
    }

    public function reopenTicket(Request $request)
    {
        $this->checkAuth();
        $ticketId = $request->input('ticket_id');
        $ticket = Ticket::find($ticketId);
        if ($ticket) {
            $ticket->status = 'new';
            $ticket->save();
        }

        return redirect()->back();
    }

    // Создание тикета
    public function createTicket(Request $request)
    {
        $this->checkAuth();

        $request->validate([
            'user_id_or_email' => 'required|string',
            'short_desc' => 'required|string',
            'full_desc' => 'required|string',
            'file' => 'nullable|file',
        ]);

        $filePath = null;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            if (in_array($file->getClientOriginalExtension(), $this->allowedFileExt, true)) {
                $filePath = $file->store('uploads', 'public');
            }
        }

        Ticket::create([
            'user_id_or_email' => $request->input('user_id_or_email'),
            'short_desc' => $request->input('short_desc'),
            'full_desc' => $request->input('full_desc'),
            'file_path' => $filePath,
            'status' => 'new',
        ]);

        return redirect('/support/agent');
    }

    // Отправка сообщения в чат
    public function sendMessage(Request $request)
    {
        $this->checkAuth();

        $ticketId = (int) $request->input('ticket_id', 0);
        $ticket = Ticket::find($ticketId);
        if (! $ticket) {
            abort(404, 'Тикет не найден');
        }

        $messageText = trim($request->input('message', ''));
        $filePath = null;

        if ($request->hasFile('chat_file')) {
            $file = $request->file('chat_file');
            if (in_array($file->getClientOriginalExtension(), $this->allowedFileExt, true)) {
                $filePath = $file->store('uploads', 'public');
            }
        }

        $chatMessages = json_decode($ticket->chat_messages ?? '[]', true);
        $chatMessages[] = [
            'id' => uniqid('m_', true),
            'role' => 'support',
            'text' => $messageText,
            'file' => $filePath,
            'timestamp' => now()->toDateTimeString(),
        ];

        $ticket->update([
            'chat_messages' => json_encode($chatMessages, JSON_UNESCAPED_UNICODE),
            'status' => 'answered',
        ]);

        return redirect('/support/agent?id='.$ticketId);
    }
}

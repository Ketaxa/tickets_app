<?php

namespace App\Services;

use App\Models\Ticket;

class SendMessage
{
    public function sendMessage(int $ticketId, string $messageText, $filePath, $msgRole, $role)
    {
        $ticket = Ticket::find($ticketId);
        if (! $ticket) {
            return response()->json(['error' => 'Нет тикета'], 404);
        }

        $chatMessages = json_decode($ticket->chat_messages ?? '[]', true);

        $chatMessages[] = [
            'id' => uniqid('m_', true),
            'role' => $msgRole,
            'text' => $messageText,
            'file' => $filePath,
            'timestamp' => now()->toDateTimeString(),
        ];

        if ($msgRole === 'support') {
            $ticket->update([
            'chat_messages' => json_encode($chatMessages, JSON_UNESCAPED_UNICODE),
            'status' => 'new',
        ]);
        }
        else {
            $ticket->update([
            'chat_messages' => json_encode($chatMessages, JSON_UNESCAPED_UNICODE),
            'status' => 'answered',
        ]);
        }
    }
}

<?php
namespace App\Services;
use App\Models\Ticket;


class SendMessage
{
public function sendMessage(int $ticketId, string $messageText, $filePath){
    $ticket = Ticket::find($ticketId);
        if (! $ticket) {
            abort(404, 'Тикет не найден');
        } 
        $chatMessages = json_decode($ticket->chat_messages ?? '[]', true);
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
}

}
<?php

namespace App\Services;

use App\Models\Ticket;

class ControlTicketsStatus
{
    public function closeTicket(int $ticketId)
    {
        $ticket = Ticket::find($ticketId);
        if ($ticket) {
            $ticket->status = 'closed';
            $ticket->save();
        }

        return $ticket;
    }

    public function reopenTicket(int $ticketId)
    {
        $ticket = Ticket::find($ticketId);
        if ($ticket) {
            $ticket->status = 'new';
            $ticket->save();
        }

        return $ticket;
    }
}

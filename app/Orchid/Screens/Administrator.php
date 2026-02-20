<?php

namespace App\Orchid\Screens;

use App\Models\Ticket;
use App\Orchid\Layouts\TicketListLayout;
use Orchid\Screen\Screen;

class Administrator extends Screen
{
    public function name(): ?string
    {
        return 'Список тикетов';
    }

    public function query(): array
    {
        return [
            'tickets' => Ticket::paginate(15),
        ];
    }

    public function layout(): array
    {
        return [
            TicketListLayout::class,
        ];
    }
}

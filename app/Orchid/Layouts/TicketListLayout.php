<?php

namespace App\Orchid\Layouts;

use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class TicketListLayout extends Table
{
    /**
     * Данные из query()
     */
    protected $target = 'tickets';

    /**
     * Колонки таблицы
     */
    protected function columns(): iterable
    {
        return [
            TD::make('id', 'ID'),

            TD::make('user_id_or_email', 'Клиент'),

            TD::make('short_desc', 'Краткое описание'),

            TD::make('status', 'Статус'),

            TD::make('created_at', 'Дата создания')
                ->render(function ($ticket) {
                    // Можно кастомно отобразить дату
                    return $ticket->created_at ? $ticket->created_at->format('d.m.Y H:i') : '-';
                }),
        ];
    }
}

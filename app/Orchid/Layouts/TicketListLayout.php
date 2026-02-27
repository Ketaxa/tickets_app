<?php

namespace App\Orchid\Layouts;

use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;
use Orchid\Screen\Fields\Input;

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
            TD::make('id', 'ID')->sort(),

            TD::make('user_id_or_email', 'Клиент')->sort()->filter(Input::make()),

            TD::make('short_desc', 'Краткое описание')->sort(),

            TD::make('status', 'Статус')->sort(),

            TD::make('created_at', 'Дата создания')
                ->render(function ($ticket) {
                    // Можно кастомно отобразить дату
                    return $ticket->created_at ? $ticket->created_at->format('d.m.Y H:i') : '-';
                }),
        ];
    }
}

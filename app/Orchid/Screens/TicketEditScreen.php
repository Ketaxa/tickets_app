<?php

namespace App\Orchid\Screens;

use App\Models\Ticket;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;

class TicketEditScreen extends Screen
{
    public $ticket;

    /**
     * Fetch data to be displayed on the screen.
     */
    public function query(Ticket $ticket): array
    {
        return [
            'ticket' => $ticket,
        ];
    }

    /**
     * The name of the screen displayed in the header.
     */
    public function name(): ?string
    {
        return $this->ticket->exists ? 'Редактирование тикета' : 'Создание тикета';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make('Создать тикет')
                ->icon('pencil')
                ->method('createOrUpdate')
                ->canSee(! $this->ticket->exists),

            Button::make('Изменить тикет')
                ->icon('note')
                ->method('createOrUpdate')
                ->canSee($this->ticket->exists),

            Button::make('Удалить тикет')
                ->icon('trash')
                ->method('remove')
                ->canSee($this->ticket->exists),
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(

    ): iterable {
        return [
            Layout::rows([
                Input::make('ticket.user_id_or_email')
                    ->title('Title')
                    ->placeholder('Attractive but mysterious title')
                    ->help('Specify a short descriptive title for this ticket.'),

                Input::make('ticket.description')
                    ->title('Description')
                    ->rows(3)
                    ->maxlength(200)
                    ->placeholder('Brief description for preview'),

                TextArea::make('ticket.author')
                    ->title('Description')
                    ->rows(3)
                    ->maxlength(200)
                    ->placeholder('Brief description for preview'),
            ]),
        ];
    }
}

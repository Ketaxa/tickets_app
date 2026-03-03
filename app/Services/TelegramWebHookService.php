<?php
namespace App\Services;

use App\Models\TelegramSubscriber;
use Illuminate\Support\Facades\Http;

class TelegramWebHookService
{
    protected string $token;

    public function __construct()
    {
        $this->token = config('services.telegram.bot_token');
    }

    public function handle(array $data): void
    {
        if (!isset($data['message'])) {
            return;
        }

        $chatId = $data['message']['chat']['id'];
        $text   = $data['message']['text'] ?? '';

        if ($text === '/start') {

            TelegramSubscriber::firstOrCreate([
                'chat_id' => $chatId
            ]);

            $this->sendMessage($chatId, 
                "Вы подписались на уведомления о новых тикетах!"
            );
        }
    }

    private function sendMessage($chatId, $text): void
    {
        Http::post(
            "https://api.telegram.org/bot{$this->token}/sendMessage",
            [
                'chat_id' => $chatId,
                'text'    => $text,
            ]
        );
    }
}
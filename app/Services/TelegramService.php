<?php
namespace App\Services;

use App\Models\TelegramSubscriber;
use Illuminate\Support\Facades\Http;

class TelegramService
{
    public static function sendMessageToAll($message)
    {
        $subscribers = TelegramSubscriber::all();
        $token = config('services.telegram.bot_token');

        foreach ($subscribers as $sub) {
            Http::post("https://api.telegram.org/bot{$token}/sendMessage", [
                'chat_id' => $sub->chat_id,
                'text' => $message,
            ]);
        }
    }
}
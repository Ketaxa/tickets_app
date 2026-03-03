<?php
use App\Http\Controllers\TelegramController;

Route::post('/telegram/webhook', [TelegramController::class, 'handle'])->withoutMiddleware(['web']);

// Route::post('/telegram/webhook', function(Request $request) {
//     $data = $request->all();

//     if(isset($data['message'])) {
//         $chatId = $data['message']['chat']['id'];
//         $text = $data['message']['text'];

//         if ($text === '/start') {
//             TelegramSubscriber::firstOrCreate(['chat_id' => $chatId]);

//             Http::post("https://api.telegram.org/bot".env('TELEGRAM_BOT_TOKEN')."/sendMessage", [
//                 'chat_id' => $chatId,
//                 'text' => "Вы подписались на уведомления о новых тикетах!",
//             ]);
//         }
//     }

//     return response()->json(['ok' => true]);
// })->withoutMiddleware(['web']);
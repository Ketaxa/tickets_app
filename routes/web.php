<?php

use App\Http\Controllers\SupportAgentController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\SupportTechController;
use App\Http\Middleware\SupportAgentAuth;
use App\Http\Middleware\SupportTechAuth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\TelegramSubscriber;

Route::get('/', function () {
    return Inertia::render('Auth', [
    ]);
});
Route::post('/', [SupportController::class, 'login']);

Route::middleware(['web', SupportAgentAuth::class])->group(function () {
Route::get('/agent', [SupportAgentController::class, 'index'])->name('agent');
Route::post('/agent/create', [SupportAgentController::class, 'createTicket'])->name('agent.create');
Route::post('/agent/check', [SupportAgentController::class, 'checkSubscription']);
Route::get('/agent/message', [SupportAgentController::class, 'showMessage'])->name('agent.message');
Route::post('/agent/message', [SupportAgentController::class, 'sendMessage'])->name('agent.message.send');
    Route::post('/agent/reopen', [SupportAgentController::class, 'reopenTicket'])->name('reopen_ticket');
    Route::post('/agent/close', [SupportAgentController::class, 'closeTicket'])->name('close_ticket');


});

Route::middleware(['web', SupportTechAuth::class])->group(function () {
    Route::get('/tech', [SupportTechController::class, 'index'])
        ->name('tech');
Route::get('/tech/message', [SupportTechController::class, 'showMessage'])->name('tech.message');
Route::post('/tech/message', [SupportTechController::class, 'sendMessage'])->name('tech.message.send');

Route::post('/tech/close', [SupportTechController::class, 'close'])
        ->name('tech.close');

Route::post('/tech/reopen', [SupportTechController::class, 'reopen'])
        ->name('tech.reopen');
});

Route::get('/logout', [SupportController::class, 'logout']);

Route::post('/telegram/webhook', function(Request $request) {
    $data = $request->all();

    if(isset($data['message'])) {
        $chatId = $data['message']['chat']['id'];
        $text = $data['message']['text'];

        if ($text === '/start') {
            TelegramSubscriber::firstOrCreate(['chat_id' => $chatId]);

            Http::post("https://api.telegram.org/bot".env('TELEGRAM_BOT_TOKEN')."/sendMessage", [
                'chat_id' => $chatId,
                'text' => "Вы подписались на уведомления о новых тикетах!",
            ]);
        }
    }

    return response()->json(['ok' => true]);
})->withoutMiddleware(['web']);
<?php
use App\Http\Controllers\TelegramController;

Route::post('/telegram/webhook', [TelegramController::class, 'handle'])->withoutMiddleware(['web']);

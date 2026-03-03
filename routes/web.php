<?php

use App\Http\Controllers\SupportAgentController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\SupportTechController;
use App\Http\Middleware\SupportAgentAuth;
use App\Http\Middleware\SupportTechAuth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


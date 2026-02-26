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


    // Route::post('/tech/send', [SupportTechController::class, 'sendMessage'])
    //     ->name('support.tech.send');

    Route::post('/tech/close', [SupportTechController::class, 'close'])
        ->name('tech.close');

    Route::post('/tech/reopen', [SupportTechController::class, 'reopen'])
        ->name('tech.reopen');
});

Route::get('/logout', [SupportController::class, 'logout']);




Route::get('/support', [SupportController::class, 'showLoginForm']);
Route::post('/support', [SupportController::class, 'login']);

Route::middleware(['web', SupportAgentAuth::class])->group(function () {
    Route::get('/support/agent', [SupportAgentController::class, 'index'])->name('support.agent');
    Route::post('/support/agent/create', [SupportAgentController::class, 'createTicket'])->name('support.agent.create');
    Route::post('/support/agent/check', [SupportAgentController::class, 'checkSubscription']);
    Route::post('/support/agent/message', [SupportAgentController::class, 'sendMessage'])->name('support.sendMessage');
    Route::post('/support/agent/close', [SupportAgentController::class, 'closeTicket'])->name('support.close_ticket');
    Route::post('/support/agent/reopen', [SupportAgentController::class, 'reopenTicket'])->name('support.reopen_ticket');
});

Route::middleware(['web', SupportTechAuth::class])->group(function () {
    Route::get('/support/tech', [SupportTechController::class, 'index'])
        ->name('support.tech');

    Route::post('/support/tech/send', [SupportTechController::class, 'sendMessage'])
        ->name('support.tech.send');

    Route::post('/support/tech/close/{id}', [SupportTechController::class, 'close'])
        ->name('support.tech.close');

    Route::post('/support/tech/reopen/{id}', [SupportTechController::class, 'reopen'])
        ->name('support.tech.reopen');
});

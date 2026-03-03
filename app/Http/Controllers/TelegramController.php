<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TelegramWebHookService;
use App\Models\TelegramSubscriber;
use Illuminate\Support\Facades\Http;


class TelegramController extends Controller
{
    protected TelegramWebHookService $service;

    public function __construct(TelegramWebHookService $service)
    {
        $this->service = $service;
    }
    public function handle(Request $request, TelegramWebhookService $service)
    {
    $service->handle($request->all());

        return response()->json(['ok' => true]);
    }
}

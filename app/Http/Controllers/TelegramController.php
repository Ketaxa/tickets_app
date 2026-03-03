<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TelegramWebHookService;

class TelegramController extends Controller
{
    public function handle(
        Request $request,
        TelegramWebHookService $service
    ) {
        $service->handle($request->all());

        return response()->noContent();
    }
}
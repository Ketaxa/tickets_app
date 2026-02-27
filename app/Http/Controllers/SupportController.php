<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupportController extends Controller
{
    public function __construct(
        protected AuthService $authService,
    ) {}

    /**
     * Обработка POST-запроса логина
     */
    public function login(Request $request)
    {

        $validated = $request->validate([
            'login' => ['required', 'string'],
    'password' => ['required'],
    'role' => ['required', 'in:tech,support'],
        ]);


        if ($this->authService->attempt($validated['login'], $validated['password'], $validated['role'])) {

            return Inertia::location($this->authService->getRedirectUrl($validated['role']));

        }

        /**
         * При ошибке авторизации
         */
        return back()->withErrors(['login' => 'Неверный логин или пароль'])->withInput();

    }

        /**
     * Функция разлогирования при выходе
     */
    public function logout(Request $request)
    {
        $this->authService->logoutSession($request);

        return Inertia::location(url('/'));
    }
}

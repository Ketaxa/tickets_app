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
     * Показать форму логина
     */
    public function showLoginForm()
    {

        /**
         *Blade-страница регистрации
         */
        return view('support.login');
    }

    /**
     * Обработка POST-запроса логина
     */
    public function login(Request $request)
    {
        // $login = trim($request->input('login', ''));
        // $password = $request->input('password', '');
        // $role = $request->input('role', '');

        $validated = $request->validate([
            'login' => ['required', 'string'],
    'password' => ['required'],
    'role' => ['required', 'in:tech,support'],
        ]);


        if ($this->authService->attempt($validated['login'], $validated['password'], $validated['role'])) {
            /**
             * return redirect($this->authService->getRedirectUrl($validated['role'])); 
             * Временно для blade, пока redirect через Inertia
             */
            return Inertia::location($this->authService->getRedirectUrl($validated['role']));

        }

        /**
         * При ошибке авторизации
         */
        return back()->withErrors(['login' => 'Неверный логин или пароль'])->withInput();

    }
}

<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

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
        $login = trim($request->input('login', ''));
        $password = $request->input('password', '');
        $role = $request->input('role', '');

        if ($this->authService->attempt($login, $password, $role)) {
            return redirect($this->authService->getRedirectUrl($role));

        }

        /**
         * При ошибке авторизации
         */
        return back()->withErrors(['Неверный логин или пароль'])->withInput();

    }
}

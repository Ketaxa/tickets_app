<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

// если будешь проверять БД

class SupportController extends Controller
{
    /**
     * Показать форму логина
     */
    public function showLoginForm()
    {
        return view('support.login'); // Blade-шаблон
    }

    /**
     * Обработка POST-запроса логина
     */
    public function login(Request $request)
    {
        $login = trim($request->input('login', ''));
        $password = $request->input('password', '');
        $role = $request->input('role', '');

        // Если хочешь проверку через env (как в legacy)
        $valid_login = env('SUPPORT_LOGIN');
        $valid_password = env('SUPPORT_PASSWORD');

        $error = '';

        // Проверка через переменные окружения
        if ($login === $valid_login && $password === $valid_password && in_array($role, ['support', 'tech'], true)) {
            // Сохраняем в сессию
            Session::put('logged_in', true);
            Session::put('role', $role);

            // Редирект в зависимости от роли
            $redirect_url = $role === 'support' ? '/support/agent' : '/support/tech';

            return redirect($redirect_url);
        }

        // Ошибка авторизации
        $error = 'Неверный логин или пароль';

        return back()->withErrors([$error])->withInput();
    }
}

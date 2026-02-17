<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Services\SupportAuthService;


class SupportController extends Controller
{


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

        /** 
         * Переменные для входа в .env
        */
        $valid_login = config('services.authData.support_login');
        $valid_password = config('services.authData.support_password');

        $error = '';

        /**
         * Проверка через переменные окружения
         */
        if ($login === $valid_login && $password === $valid_password && in_array($role, ['support', 'tech'], true)) {
            // Сохраняем в сессию
            Session::put('logged_in', true);
            Session::put('role', $role);

            /**
             * Редирект в зависимости от роли
             */
            $redirect_url = $role === 'support' ? '/support/agent' : '/support/tech';

            return redirect($redirect_url);
        }

        /**
         * При ошибке авторизации
         */
        $error = 'Неверный логин или пароль';
        return back()->withErrors([$error])->withInput();
    }
}

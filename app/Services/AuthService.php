<?php

namespace App\Services;

use Illuminate\Support\Facades\Session;

class AuthService
{
    public function attempt(string $login, string $password, string $role): bool
    {
        /**
         * Переменные для входа в .env
         */
        $valid_login = config('services.authData.support_login');
        $valid_password = config('services.authData.support_password');

        /**
         * Проверка через переменные окружения
         */
        if (
            $login === $valid_login &&
            $password === $valid_password &&
            in_array($role, ['support', 'tech'], true)
        ) {
            Session::put('logged_in', true);
            Session::put('role', $role);

            return true;
        }

        return false;
    }

    /**
     * Редирект в зависимости от роли
     */
    public function getRedirectUrl(string $role): string
    {
        return $role === 'support'
            ? '/agent'
            : '/support/tech';
    }
}

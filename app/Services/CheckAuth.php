<?php

namespace App\Services;

use Illuminate\Support\Facades\Session;

class CheckAuth
{
    public function checkAuth()
    {
        return Session::get('logged_in') === true
            && (Session::get('role') === 'support' || Session::get('role') === 'tech');
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SupportTechAuth
{
    public function handle(Request $request, Closure $next)
    {
        $loggedIn = $request->session()->get('logged_in');
        $role = $request->session()->get('role');

        if (! $loggedIn || $role !== 'tech') {
            abort(403, 'Доступ запрещён');
        }

        return $next($request);
    }
}

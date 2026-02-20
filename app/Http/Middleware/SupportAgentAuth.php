<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SupportAgentAuth
{
    public function handle(Request $request, Closure $next)
    {
        $loggedIn = $request->session()->get('logged_in');
        $role = $request->session()->get('role');

        if (! $loggedIn || $role !== 'support') {
            abort(403, 'Доступ запрещён');
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SupportAgentAuth
{
    public function handle(Request $request, Closure $next)
    {
        if (!Session::get('logged_in') || Session::get('role') !== 'support') {
            return redirect('/support');
        }

        return $next($request);
    }
}

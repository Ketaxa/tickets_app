<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class SupportAgentAuth
{
    public function handle(Request $request, Closure $next)
    {
         $loggedIn = $request->session()->get('logged_in');
        $role = $request->session()->get('role');

        if (!$loggedIn || $role !== 'support') {
            return redirect('/support'); 
        }

        return $next($request);
    }
}

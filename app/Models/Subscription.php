<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $table = 'subscriptions';

    protected $fillable = [
        'user_id',
        'status',
        'expires_at',
        'auto_renewal',
    ];

    protected $casts = [
        'expires_at' => 'datetime',    // <-- автоматически Carbon
        'created_at' => 'datetime',    // <-- тоже Carbon
        'auto_renewal' => 'boolean',   // удобно для проверки
    ];
}

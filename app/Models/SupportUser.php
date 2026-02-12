<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class SupportUser extends Authenticatable
{
    use Notifiable;

    protected $table = 'support_users'; // твоя таблица
    protected $primaryKey = 'id';       // если PK отличается, укажи
    public $timestamps = false;         // если нет created_at/updated_at

    protected $fillable = [
        'email', 'password', 'role'
    ];

    protected $hidden = [
        'password',
    ];
}

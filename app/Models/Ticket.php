<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;
use Orchid\Filters\Types\Like;

class Ticket extends Model
{
    use AsSource, Filterable;

    protected $table = 'tickets';

    protected $fillable = [
        'user_id_or_email',
        'short_desc',
        'full_desc',
        'file_path',
        'chat_messages',
        'status',
    ];
    protected $allowedSorts = [
        'id',
    'user_id_or_email' => Like::class,
        'short_desc',
        'full_desc',
        'file_path',
        'chat_messages',
        'status',
];

    public $timestamps = true; // чтобы автоматически обновлялись created_at и updated_at
}

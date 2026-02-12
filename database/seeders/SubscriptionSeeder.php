<?php

namespace Database\Seeders;

use App\Models\Subscription;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class SubscriptionSeeder extends Seeder
{
    public function run(): void
    {
        // Пользователь с автопродлением
        Subscription::create([
            'user_id' => 1,
            'status' => 'active',
            'auto_renewal' => true,
            'expires_at' => Carbon::now()->addMonth(), // истекает через месяц
        ]);

        // Пользователь без автопродления
        Subscription::create([
            'user_id' => 2,
            'status' => 'active',
            'auto_renewal' => false,
            'expires_at' => Carbon::now()->addMonth(),
        ]);
    }
}

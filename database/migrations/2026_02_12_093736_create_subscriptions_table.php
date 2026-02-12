<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->enum('status', ['active', 'pending', 'canceled'])->default('pending');
            $table->boolean('auto_renewal')->default(false);
            $table->dateTime('expires_at')->nullable();
            $table->timestamps();

            $table->unique('user_id'); // Если нужно, чтобы у одного пользователя была максимум одна подписка
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};

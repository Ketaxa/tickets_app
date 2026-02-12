<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('user_id_or_email');
            $table->string('short_desc');
            $table->text('full_desc')->nullable();
            $table->string('file_path')->nullable();
            $table->text('chat_messages')->nullable();
            $table->enum('status', ['new','answered','closed'])->default('new');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};

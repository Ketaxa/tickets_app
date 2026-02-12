<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Панель техспециалиста</title>

<style>
body { font-family: Arial; background:#f4f6f9; margin:0; }
.container { width:1200px; margin:30px auto; }
.header { display:flex; justify-content:space-between; margin-bottom:20px; }
.button { padding:8px 15px; border:none; border-radius:4px; cursor:pointer; }
.button-red { background:#e74c3c; color:white; }
.button-blue { background:#3498db; color:white; }
.button-gray { background:#95a5a6; color:white; }
.table { width:100%; border-collapse:collapse; background:white; }
.table th, .table td { padding:10px; border-bottom:1px solid #ddd; }
.chat-box { background:white; padding:20px; border-radius:6px; }
.message { margin-bottom:15px; padding:10px; border-radius:6px; max-width:70%; }
.message.tech { background:#3498db; color:white; margin-left:auto; }
.message.support { background:#ecf0f1; }
textarea { width:100%; padding:10px; }
</style>
</head>
<body>

<div class="container">

<div class="header">
<h2>Панель техспециалиста</h2>
<a href="/support" class="button button-red">Выход</a>
</div>

@if($current_ticket)

<div class="chat-box">
<h3>Тикет #{{ $current_ticket->id }}</h3>

@php
$chat = json_decode($current_ticket->chat_messages ?? '[]', true);
@endphp

@foreach($chat as $msg)
<div class="message {{ $msg['role'] }}">
    {{ $msg['text'] }}
</div>
@endforeach

<form method="POST" action="{{ route('support.tech.send') }}">
@csrf
<input type="hidden" name="ticket_id" value="{{ $current_ticket->id }}">
<textarea name="message" required></textarea>
<br><br>
<button class="button button-blue">Отправить</button>
</form>

<br>

@if($current_ticket->status === 'closed')
<form method="POST" action="{{ route('support.tech.reopen',$current_ticket->id) }}">
@csrf
<button class="button button-gray">Открыть</button>
</form>
@else
<form method="POST" action="{{ route('support.tech.close',$current_ticket->id) }}">
@csrf
<button class="button button-gray">Закрыть</button>
</form>
@endif

</div>

@else

<table class="table">
<tr>
<th>ID</th>
<th>Клиент</th>
<th>Описание</th>
<th>Статус</th>
</tr>

@foreach($tickets as $ticket)
<tr onclick="window.location='?id={{ $ticket->id }}'">
<td>#{{ $ticket->id }}</td>
<td>{{ $ticket->user_id_or_email }}</td>
<td>{{ $ticket->short_desc }}</td>
<td>{{ $ticket->status }}</td>
</tr>
@endforeach
</table>

@endif

</div>

</body>
</html>

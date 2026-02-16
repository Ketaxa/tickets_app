{{-- <!DOCTYPE html>
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
</html> --}}
{{-- resources/views/support/tech.blade.php --}}

<style>
.container { max-width: 1200px; margin: auto; padding: 20px; font-family: sans-serif; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.header h1 { font-size: 28px; }
.header-actions a { text-decoration: none; padding: 8px 15px; border-radius: 6px; }
.btn { padding: 8px 15px; border-radius: 6px; text-decoration: none; cursor: pointer; }
.btn-blue { background-color: #3b82f6; color: white; }
.btn-red { background-color: #ef4444; color: white; }
.btn-gray { background-color: #6b7280; color: white; }
.ticket-card { background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
.ticket-header { display: flex; justify-content: space-between; padding: 20px; border-bottom: 1px solid #ddd; background: #f0f4f8; }
.ticket-actions form, .ticket-actions a { margin-left: 10px; display: inline-block; }
.badge { padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; }
.badge-yellow { background: #fef9c3; color: #b45309; }
.badge-green { background: #d1fae5; color: #065f46; }
.badge-gray { background: #e5e7eb; color: #374151; }
.chat-area { height: 400px; overflow-y: auto; padding: 20px; background: #f9fafb; }
.chat-row { display: flex; margin-bottom: 10px; }
.justify-end { justify-content: flex-end; }
.justify-start { justify-content: flex-start; }
.chat-bubble-tech { background: #3b82f6; color: white; padding: 10px 15px; border-radius: 12px; max-width: 600px; }
.chat-bubble-agent { background: #fff; border-left: 4px solid #f97316; color: #111; padding: 10px 15px; border-radius: 12px; max-width: 600px; }
.chat-text { white-space: pre-wrap; }
.chat-file img { max-width: 200px; border-radius: 8px; }
.chat-link { text-decoration: underline; }
.chat-timestamp { font-size: 12px; opacity: 0.7; margin-top: 5px; }
.chat-form { padding: 20px; border-top: 1px solid #ddd; background: #fff; display: flex; gap: 10px; align-items: flex-end; }
.input-text { flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 10px; }
.input-file { display: none; }
.file-label { cursor: pointer; padding: 6px; border-radius: 6px; background: #f3f4f6; }
.ticket-search { display: flex; gap: 10px; margin-bottom: 20px; }
.ticket-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
.tab { padding: 8px 15px; border-radius: 6px; background: #f3f4f6; text-decoration: none; }
.tab-active { background: #3b82f6; color: white; }
.ticket-list table { width: 100%; border-collapse: collapse; }
.ticket-list th, .ticket-list td { padding: 10px; border-bottom: 1px solid #ddd; }
.ticket-list tr:hover { background: #f0f4f8; cursor: pointer; }
.text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.no-tickets { text-align: center; padding: 50px; color: #9ca3af; font-size: 20px; }
</style>

<div class="container">

    <!-- Header -->
    <div class="header">
        <h1>Панель техспециалиста</h1>
        <div class="header-actions">
            <a href="/support" class="btn btn-red">Выход</a>
        </div>
    </div>

    @if($current_ticket)
        <!-- Текущий тикет -->
        <div class="ticket-card">

            <div class="ticket-header">
                <div>
                    <h2>#{{ $current_ticket->id }}</h2>
                    <p>{{ $current_ticket->user_id_or_email }}</p>

                    @php
                        $status = $current_ticket->status ?? 'new';
                        if($status==='answered'){ $badgeClass='badge-yellow'; $badgeText='Ожидается ответ'; }
                        elseif($status==='closed'){ $badgeClass='badge-gray'; $badgeText='Закрыт'; }
                        else{ $badgeClass='badge-green'; $badgeText='Ответ получен'; }
                    @endphp

                    <span class="badge {{ $badgeClass }}">{{ $badgeText }}</span>
                </div>

                <div class="ticket-actions">
                    <form method="POST" action="{{ $current_ticket->status==='closed' ? route('support.tech.reopen', $current_ticket->id) : route('support.tech.close', $current_ticket->id) }}">
                        @csrf
                        <input type="hidden" name="ticket_id" value="{{ $current_ticket->id }}">
                        <button class="btn btn-gray">{{ $current_ticket->status==='closed' ? 'Открыть' : 'Закрыть' }}</button>
                    </form>
                    <a href="{{ route('support.tech') }}" class="btn btn-blue">Назад</a>
                </div>
            </div>

            <!-- Чат -->
            <div id="chatArea" class="chat-area">
                @foreach($chatMessages as $msg)
                    @php
                        $isTech = $msg['role']==='tech';
                        $bubbleClass = $isTech ? 'chat-bubble-tech' : 'chat-bubble-agent';
                    @endphp
                    <div class="chat-row {{ $isTech ? 'justify-end' : 'justify-start' }}">
                        <div class="{{ $bubbleClass }}">
                            <div class="chat-text">{!! nl2br(e($msg['text'] ?? '')) !!}</div>

                            @if(!empty($msg['file']))
                                @php $ext = pathinfo($msg['file'], PATHINFO_EXTENSION); @endphp
                                <div class="chat-file">
                                    @if(in_array(strtolower($ext), ['jpg','jpeg','png']))
                                        <img src="{{ Storage::url($msg['file']) }}" alt="Изображение">
                                    @else
                                        <a href="{{ Storage::url($msg['file']) }}" target="_blank" class="chat-link">📎 {{ basename($msg['file']) }}</a>
                                    @endif
                                </div>
                            @endif

                            <div class="chat-timestamp">
                                {{ isset($msg['timestamp']) ? date('H:i d.m.Y', strtotime($msg['timestamp'])) : '' }}
                                {{ $isTech ? '(Техспециалист)' : '(Агент)' }}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <!-- Форма отправки сообщения -->
            <div class="chat-form">
                <form method="POST" enctype="multipart/form-data" action="{{ route('support.tech.send') }}">
                    @csrf
                    <input type="hidden" name="ticket_id" value="{{ $current_ticket->id }}">
                    <textarea name="message" placeholder="Напишите ответ агенту..." rows="1" class="input-text"></textarea>
                    <input type="file" name="chat_file" id="chatFile" class="input-file">
                    <label for="chatFile" class="file-label" title="Прикрепить файл">📎</label>
                    <button type="submit" class="btn btn-blue">➤</button>
                </form>
            </div>

        </div>

    @else
        <!-- Список тикетов -->
        <div class="ticket-search">
            <input type="text" id="search" placeholder="🔍 Поиск по ID или email..." value="{{ $search }}" class="input-text">
            <button onclick="searchTickets()" class="btn btn-gray">Найти</button>
        </div>

        <div class="ticket-tabs">
            <a href="{{ route('support.tech', array_merge(request()->all(), ['tab'=>'active','sort'=>'answered'])) }}" class="{{ ($tab==='active' && $sort==='answered')?'tab-active':'tab' }}">Answered first</a>
            <a href="{{ route('support.tech', array_merge(request()->all(), ['tab'=>'active','sort'=>'date'])) }}" class="{{ ($tab==='active' && $sort==='date')?'tab-active':'tab' }}">По дате</a>
            <a href="{{ route('support.tech', array_merge(request()->all(), ['tab'=>'archive'])) }}" class="{{ ($tab==='archive')?'tab-active':'tab' }}">📁 Архив</a>
        </div>

        <div class="ticket-list">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Клиент</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th>Дата</th>
                </tr>
                </thead>
                <tbody>
                @forelse($tickets as $ticket)
                    @php
                        $st = $ticket->status;
                        $cls = $st==='answered'?'badge-yellow':($st==='closed'?'badge-gray':'badge-green');
                        $txt = $st==='answered'?'Ожидается ответ':($st==='closed'?'Закрыт':'Ответ получен');
                    @endphp
                    <tr onclick="viewTicket({{ $ticket->id }})">
                        <td>#{{ $ticket->id }}</td>
                        <td>{{ $ticket->user_id_or_email }}</td>
                        <td>
                            <div>{{ $ticket->short_desc }}</div>
                            <div class="text-truncate">{{ Str::limit($ticket->full_desc, 100) }}</div>
                        </td>
                        <td><span class="badge {{ $cls }}">{{ $txt }}</span></td>
                        <td>{{ date('d.m H:i', strtotime($ticket->created_at)) }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="no-tickets">Тикетов пока нет</td>
                    </tr>
                @endforelse
                </tbody>
            </table>
        </div>
    @endif

</div>

<script>
function searchTickets() {
    const search = document.getElementById('search').value;
    const url = new URL(window.location);
    url.searchParams.set('search', search);
    url.searchParams.delete('id');
    window.location = url;
}

function viewTicket(id) {
    const url = new URL(window.location);
    url.searchParams.set('id', id);
    window.location = url;
}

// Автоскролл чата
(function() {
    const chatArea = document.getElementById('chatArea');
    if(chatArea) chatArea.scrollTop = chatArea.scrollHeight;
})();
</script>

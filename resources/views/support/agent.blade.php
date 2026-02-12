
<style>
/* === Общие стили === */
body { background: #f0f0f0; font-family: Arial, sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
.button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
.button-blue { background: #4f8ef7; color: white; }
.button-blue:hover { background: #3b6fd0; }
.button-green { background: #4caf50; color: white; }
.button-red { background: #f44336; color: white; }
.button-gray { background: #9e9e9e; color: white; }
.ticket-card { background: white; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
.ticket-header { padding: 15px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center; }
.ticket-body { padding: 15px; max-height: 400px; overflow-y: auto; background: #fafafa; }
.chat-bubble { padding: 10px 15px; border-radius: 15px; margin-bottom: 10px; max-width: 70%; }
.chat-support { background: #4f8ef7; color: white; margin-left: auto; }
.chat-tech { background: #eee; color: #333; margin-right: auto; border-left: 4px solid #f39c12; }
.chat-timestamp { font-size: 10px; color: #555; margin-top: 5px; }
.modal { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; }
.modal-content { background: white; padding: 20px; border-radius: 10px; width: 90%; max-width: 500px; max-height: 90vh; overflow-y: auto; }
.input, textarea { width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 6px; }
.table { width: 100%; border-collapse: collapse; background: white; }
.table th, .table td { padding: 12px; border: 1px solid #ddd; text-align: left; }
.table th { background: #f9f9f9; font-weight: bold; }
.badge { padding: 3px 8px; border-radius: 8px; font-size: 12px; font-weight: bold; display: inline-block; }
.badge-answered { background: #d4edda; color: #155724; }
.badge-new { background: #fff3cd; color: #856404; }
.badge-closed { background: #e2e3e5; color: #6c757d; }
</style>

<div class="container">
    <!-- Header -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <h1>Панель поддержки</h1>
        <div>
            <button class="button button-blue" onclick="openTicketModal()">➕ Создать тикет</button>
            <button class="button button-green" onclick="openSubModal()">✅ Проверить подписку</button>
            <a class="button button-red" href="/support">Выход</a>
        </div>
    </div>

    @if(!empty($current_ticket))
        <div class="ticket-card">
            <div class="ticket-header">
                <div>
                    <strong>#{{ $current_ticket->id }}</strong> — {{ $current_ticket->user_id_or_email }}
                    @php
                        $status = $current_ticket->status ?? 'new';
                        $badgeClass = $status==='answered' ? 'badge-answered' : ($status==='closed' ? 'badge-closed' : 'badge-new');
                        $badgeText = $status==='answered'?'Ответ получен':($status==='closed'?'Закрыт':'Ожидает ответа');
                    @endphp
                    <span class="badge {{ $badgeClass }}">{{ $badgeText }}</span>
                </div>
                <div>
                    <form method="POST" action="{{ $current_ticket->status==='closed'?route('support.reopen_ticket'):route('support.close_ticket') }}" style="display:inline;">
                        @csrf
                        <input type="hidden" name="ticket_id" value="{{ $current_ticket->id }}">
                        <button class="button button-gray">{{ $current_ticket->status==='closed'?'Открыть':'Закрыть' }}</button>
                    </form>
                    <a class="button button-blue" href="{{ url()->current() }}">Назад</a>
                </div>
            </div>
            <div class="ticket-body" id="chatArea">
                @foreach($chat_messages as $msg)
                    @php
                        $role = $msg['role'] ?? 'support';
                        $isMine = $role==='support';
                    @endphp
                    <div class="chat-bubble {{ $isMine?'chat-support':'chat-tech' }}">
                        {!! nl2br(e($msg['text'] ?? '')) !!}
                        @if(!empty($msg['file']))
                            <div><a href="{{ Storage::url($msg['file']) }}" target="_blank">📎 {{ basename($msg['file']) }}</a></div>
                        @endif
                        <div class="chat-timestamp">{{ $msg['timestamp'] ?? '' }} {{ $isMine?'(Агент)':'(Техспец)' }}</div>
                    </div>
                @endforeach
            </div>
            <div style="padding:10px; border-top:1px solid #ddd;">
                <form method="POST" enctype="multipart/form-data" action="{{ route('support.send_message') }}" style="display:flex; gap:10px;">
                    @csrf
                    <input type="hidden" name="ticket_id" value="{{ $current_ticket->id }}">
                    <textarea name="message" placeholder="Напишите сообщение..." class="input" rows="2"></textarea>
                    <input type="file" name="chat_file">
                    <button class="button button-blue">➤</button>
                </form>
            </div>
        </div>
    @else
        {{-- список тикетов --}}
        <div style="margin-bottom:20px;">
            <input type="text" id="search" placeholder="Поиск по ID или email" class="input" value="{{ $search }}">
            <button onclick="searchTickets()" class="button button-gray">Найти</button>
        </div>
        <table class="table">
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
                    <tr onclick="viewTicket({{ $ticket->id }})" style="cursor:pointer;">
                        <td>#{{ $ticket->id }}</td>
                        <td>{{ $ticket->user_id_or_email }}</td>
                        <td>{{ Str::limit($ticket->short_desc,50) }}</td>
                        <td>
                            @php
                                $st=$ticket->status;
                                $cls = $st==='answered'?'badge-answered':($st==='closed'?'badge-closed':'badge-new');
                                $txt = $st==='answered'?'Ответ получен':($st==='closed'?'Закрыт':'Ожидает ответа');
                            @endphp
                            <span class="badge {{ $cls }}">{{ $txt }}</span>
                        </td>
                        <td>{{ date('d.m H:i', strtotime($ticket->created_at)) }}</td>
                    </tr>
                @empty
                    <tr><td colspan="5" style="text-align:center;">Тикетов пока нет</td></tr>
                @endforelse
            </tbody>
        </table>
    @endif
    <!-- Модалка создания тикета -->
<div id="ticketModal" class="modal">
    <div class="modal-content">
        <h2>Создать тикет</h2>

        <form method="POST" action="/support/agent/create">
    @csrf

    <input type="text" name="user_id_or_email" placeholder="Email или ID клиента" class="input" required>
    <input type="text" name="short_desc" placeholder="Краткое описание" class="input" required>
    <textarea name="full_desc" placeholder="Полное описание" class="input" required></textarea>

    <div style="text-align:right;">
        <button type="button" class="button button-gray" onclick="closeTicketModal()">Отмена</button>
        <button type="submit" class="button button-blue">Создать</button>
    </div>
</form>

    </div>
</div>
<!-- Модалка проверки подписки -->
<div id="subModal" class="modal">
    <div class="modal-content">
        <h2>Проверить подписку</h2>

        <form method="POST" action="/support/agent/check">
            @csrf
            <label for="sub_user_id">ID пользователя</label>
            <input type="text" name="sub_user_id" id="user_id" placeholder="Например: 12345" class="input" required
                   value="{{ old('sub_user_id', '') }}">

                   @php
    $subscription_result_text = session('subscription_result_text', '');
    $subscription_result_type = session('subscription_result_type', '');
@endphp
            @if(!empty($subscription_result_text))
                @php
                    $cls = 'badge-new';
                    if($subscription_result_type==='success') $cls='badge-answered';
                    elseif($subscription_result_type==='warning') $cls='badge-new';
                    elseif($subscription_result_type==='danger') $cls='badge-closed';
                    elseif($subscription_result_type==='info') $cls='badge-new';
                @endphp
                <div style="margin-bottom:10px; padding:10px; border-radius:6px; background:
                    {{ $subscription_result_type==='success'?'#d4edda':
                       ($subscription_result_type==='warning'?'#fff3cd':
                       ($subscription_result_type==='danger'?'#f8d7da':'#cce5ff')) }};
                    color:
                    {{ $subscription_result_type==='success'?'#155724':
                       ($subscription_result_type==='warning'?'#856404':
                       ($subscription_result_type==='danger'?'#721c24':'#004085')) }};
                    border:1px solid;
                    border-color:
                    {{ $subscription_result_type==='success'?'#c3e6cb':
                       ($subscription_result_type==='warning'?'#ffeeba':
                       ($subscription_result_type==='danger'?'#f5c6cb':'#b8daff')) }};
                ">
                    {{ $subscription_result_text }}
                </div>
            @endif

            <div style="text-align:right;">
                <button type="button" class="button button-gray" onclick="closeSubModal()">Закрыть</button>
                <button type="submit" class="button button-green">Проверить</button>
            </div>
        </form>
    </div>
</div>

</div>


{{-- JS модалки и поиск --}}
<script>
function openTicketModal(){document.getElementById('ticketModal').style.display='flex';}
function closeTicketModal(){document.getElementById('ticketModal').style.display='none';}
function openSubModal(){document.getElementById('subModal').style.display='flex';}
function closeSubModal(){document.getElementById('subModal').style.display='none';}
function searchTickets(){
    let s = document.getElementById('search').value;
    let u = new URL(window.location.href);
    u.searchParams.set('search', encodeURIComponent(s));
    u.searchParams.delete('id'); // <--- сбрасываем выбранный тикет
    window.location.href = u.toString();
}
function viewTicket(id){let u=new URL(window.location); u.searchParams.set('id',id); window.location=u;}
@if(session('open_sub_modal'))
    openSubModal();
@endif
</script>
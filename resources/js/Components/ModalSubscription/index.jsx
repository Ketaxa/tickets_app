import styles from "./ModalSubscription.module.css";
export default function CreateTicket({ closeModalTicket }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Проверить подписку</h2>
                <form method="POST" action="/support/agent/check">
                    <label for="sub_user_id">ID пользователя</label>
                    <input
                        type="text"
                        name="sub_user_id"
                        id="user_id"
                        placeholder="Например: 12345"
                        class="input"
                        required
                    ></input>
                </form>
            </div>
        </div>
    );
}
{
    /* <div id="subModal" class="modal">
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
</div> */
}

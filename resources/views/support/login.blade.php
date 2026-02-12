<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Sova Support</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #ffffff;
            min-height: 100vh;
        }

        .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        /* Градиентный переливающийся фон, как в Lobby.jsx */
        .gradient-bg {
            position: fixed;
            inset: 0;
            background: linear-gradient(
                135deg,
                #667eea 0%,
                #764ba2 25%,
                #f093fb 50%,
                #4facfe 75%,
                #667eea 100%
            );
            background-size: 400% 400%;
            animation: gradientShift 12s ease-in-out infinite;
            z-index: 0;
            pointer-events: none;
        }

        @keyframes gradientShift {
            0%, 100% {
                background-position: 0% 0%;
            }
            50% {
                background-position: 100% 100%;
            }
        }

        /* Пузырьки / частицы на фоне */
        .particles {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 1;
        }

        .particle {
            position: absolute;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.1));
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow:
                0 0 25px rgba(255, 255, 255, 0.8),
                0 0 60px rgba(102, 126, 234, 0.7),
                0 12px 40px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(14px);
            animation: bubbleFloat 12s ease-in-out infinite;
            opacity: 0.65;
        }

        /* Разные позиции/скорости/размеры через nth-child (имитация рандома) */
        .particle:nth-child(1)  { top: 72%; left: 8%;  animation-duration: 11s; transform-origin: -20% 120%; }
        .particle:nth-child(2)  { top: 18%; left: 20%; animation-duration: 13s; transform-origin: 0% 0%; }
        .particle:nth-child(3)  { top: 60%; left: 32%; animation-duration: 10s; width: 70px; height: 70px; }
        .particle:nth-child(4)  { top: 30%; left: 50%; animation-duration: 14s; width: 110px; height: 110px; }
        .particle:nth-child(5)  { top: 78%; left: 70%; animation-duration: 12s; }
        .particle:nth-child(6)  { top: 16%; left: 82%; animation-duration: 15s; width: 65px; height: 65px; }
        .particle:nth-child(7)  { top: 40%; left: 12%; animation-duration: 9s;  }
        .particle:nth-child(8)  { top: 50%; left: 88%; animation-duration: 13s; width: 100px; height: 100px; }
        .particle:nth-child(9)  { top: 10%; left: 55%; animation-duration: 12s; }
        .particle:nth-child(10) { top: 85%; left: 45%; animation-duration: 16s; width: 60px; height: 60px; }

        @keyframes bubbleFloat {
            0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.2;
            }
            25% {
                transform: translate3d(25px, -35px, 0) scale(1.05) rotate(2deg);
                opacity: 0.7;
            }
            50% {
                transform: translate3d(-15px, -70px, 0) scale(1.15) rotate(-3deg);
                opacity: 0.9;
            }
            75% {
                transform: translate3d(20px, -40px, 0) scale(1.08) rotate(1deg);
                opacity: 0.6;
            }
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.2;
            }
        }

        .container {
            width: 100%;
            max-width: 400px;
            background: #ffffff;
            border-radius: 10px;
            padding: 30px 30px 40px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-align: center;
            position: relative;
            z-index: 2; /* поверх фона и пузырьков */
        }

        .logo {
            margin-bottom: 10px;
        }
        .logo img {
            max-width: 120px;
            height: auto;
        }

        h1 {
            margin: 10px 0 25px;
            font-size: 26px;
            color: #444;
        }

        .form-group {
            margin-bottom: 15px;
            text-align: left;
        }

        label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
            color: #555;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 8px 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 14px;
        }

        .btn-row {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }

        .btn {
            padding: 10px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            cursor: pointer;
            color: #fff;
        }

        .btn-support {
            background: #8a2be2;
        }

        .btn-tech {
            background: #00bcd4;
        }

        .error {
            margin-top: 10px;
            color: #d32f2f;
            font-size: 13px;
        }
    </style>
</head>
<body>
<div class="page">
    <div class="gradient-bg"></div>
    <div class="particles">
        @for ($i = 0; $i < 10; $i++)
            <div class="particle"></div>
        @endfor
    </div>

    <div class="container">
        <div class="logo">
            <img src="{{ asset('support/sova.png') }}" alt="sova.help logo">
        </div>

        {{-- Ошибки --}}
        @if ($errors->any())
            <div class="error">{{ $errors->first() }}</div>
        @endif

        <form method="POST" action="{{ url('/support') }}">
            @csrf
            <div class="form-group">
                <label for="login">Логин</label>
                <input type="text" id="login" name="login" value="{{ old('login') }}" required>
            </div>

            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" required>
            </div>

            <input type="hidden" name="role" id="role" value="support">

            <div class="btn-row">
                <button type="submit" class="btn btn-support" onclick="event.preventDefault(); setRoleAndSubmit('support');">
                    Войти как сотрудник поддержки
                </button>
                <button type="submit" class="btn btn-tech" onclick="event.preventDefault(); setRoleAndSubmit('tech');">
                    Войти как технический специалист
                </button>
            </div>
        </form>
    </div>
</div>

<script>
function setRoleAndSubmit(role) {
    document.getElementById('role').value = role;
    document.querySelector('form').submit();
}
</script>
</body>
</html>

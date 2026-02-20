<?php

namespace App\Services;

use App\Models\Subscription;

class checkSubscription
{
    public function checkSubscription(int $userId)
    {
        $subscription = Subscription::where('user_id', $userId)->first();
        if (! $subscription) {
            return [
                'text' => 'Подписка не найдена',
                'type' => 'info',
            ];
        }

        return match ($subscription->status) {
            'active' => [
                'text' => $this->buildActiveText($subscription),
                'type' => 'success',
            ],
            'pending' => [
                'text' => 'Попытка оформления подписки '
                    .$subscription->created_at->format('d.m.Y H:i')
                    .', но не завершилась успехом',
                'type' => 'warning',
            ],
            'canceled' => [
                'text' => 'Подписка отключена',
                'type' => 'danger',
            ],
            default => [
                'text' => 'Статус подписки не распознан',
                'type' => 'info',
            ],
        };

    }

    protected function buildActiveText(Subscription $subscription): string
    {
        $expiresAt = $subscription->expires_at
            ? $subscription->expires_at->format('d.m.Y H:i')
            : 'неизвестно';

        $autoRenew = $subscription->auto_renewal
            ? 'включено'
            : 'отключено';

        return "Подписка активна до {$expiresAt}, автопродление {$autoRenew}";
    }
}

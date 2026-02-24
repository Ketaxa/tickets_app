import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::notifications
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: notifications.url(options),
    method: 'post',
})

notifications.definition = {
    methods: ["post"],
    url: '/admin/api/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::notifications
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::notifications
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
notifications.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: notifications.url(options),
    method: 'post',
})
const api = {
    notifications: Object.assign(notifications, notifications),
}

export default api
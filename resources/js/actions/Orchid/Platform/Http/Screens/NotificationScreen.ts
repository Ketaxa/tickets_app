import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
const NotificationScreen = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationScreen.url(args, options),
    method: 'get',
})

NotificationScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/notifications/{id?}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
NotificationScreen.url = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "id",
            "method",
        ])

    const parsedArgs = {
                        id: args?.id,
                                method: args?.method,
                }

    return NotificationScreen.definition.url
            .replace('{id?}', parsedArgs.id?.toString() ?? '')
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
NotificationScreen.get = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotificationScreen.url(args, options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
NotificationScreen.head = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotificationScreen.url(args, options),
    method: 'head',
})
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
NotificationScreen.post = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: NotificationScreen.url(args, options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::unreadNotification
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
export const unreadNotification = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unreadNotification.url(options),
    method: 'post',
})

unreadNotification.definition = {
    methods: ["post"],
    url: '/admin/api/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::unreadNotification
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
unreadNotification.url = (options?: RouteQueryOptions) => {
    return unreadNotification.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::unreadNotification
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:150
 * @route '/admin/api/notifications'
 */
unreadNotification.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unreadNotification.url(options),
    method: 'post',
})
NotificationScreen.unreadNotification = unreadNotification

export default NotificationScreen
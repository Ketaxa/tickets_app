import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
const UserProfileScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserProfileScreen.url(args, options),
    method: 'get',
})

UserProfileScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/profile/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
UserProfileScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { method: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    method: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        method: args?.method,
                }

    return UserProfileScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
UserProfileScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserProfileScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
UserProfileScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserProfileScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
UserProfileScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserProfileScreen.url(args, options),
    method: 'post',
})
export default UserProfileScreen
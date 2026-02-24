import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
const UserListScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserListScreen.url(args, options),
    method: 'get',
})

UserListScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
UserListScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return UserListScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
UserListScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserListScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
UserListScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserListScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
UserListScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserListScreen.url(args, options),
    method: 'post',
})
export default UserListScreen
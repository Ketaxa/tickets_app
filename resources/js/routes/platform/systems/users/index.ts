import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
export const edit = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/{user}/edit/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
edit.url = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        user: args.user,
                                method: args.method,
                }

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
edit.get = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
edit.head = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
edit.post = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
export const create = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/create/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
create.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
create.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
create.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
create.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})
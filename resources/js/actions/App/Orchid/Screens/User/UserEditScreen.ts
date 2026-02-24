import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
const UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.url(args, options),
    method: 'get',
})

UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/{user}/edit/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.url = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions) => {
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

    return UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.get = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.head = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/{user}/edit/{method?}'
 */
UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.post = (args: { user: string | number, method?: string | number } | [user: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed.url(args, options),
    method: 'post',
})

    /**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
const UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0 = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.url(args, options),
    method: 'get',
})

UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/create/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserEditScreen::__invoke
 * @see app/Orchid/Screens/User/UserEditScreen.php:43
 * @route '/admin/users/create/{method?}'
 */
UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0.url(args, options),
    method: 'post',
})

const UserEditScreen = {
    '/admin/users/{user}/edit/{method?}': UserEditScreena8c8410199c4e5ea06b01c08e1ab1bed,
    '/admin/users/create/{method?}': UserEditScreen19a1f5cf9b5f5daee8aecb6f05e456f0,
}

export default UserEditScreen
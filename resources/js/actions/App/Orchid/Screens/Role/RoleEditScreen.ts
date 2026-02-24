import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/{role}/edit/{method?}'
 */
const RoleEditScreen02597cf375eb4c2740bbe399620e2a45 = (args: { role: string | number, method?: string | number } | [role: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleEditScreen02597cf375eb4c2740bbe399620e2a45.url(args, options),
    method: 'get',
})

RoleEditScreen02597cf375eb4c2740bbe399620e2a45.definition = {
    methods: ["get","head","post"],
    url: '/admin/roles/{role}/edit/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/{role}/edit/{method?}'
 */
RoleEditScreen02597cf375eb4c2740bbe399620e2a45.url = (args: { role: string | number, method?: string | number } | [role: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        role: args.role,
                                method: args.method,
                }

    return RoleEditScreen02597cf375eb4c2740bbe399620e2a45.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/{role}/edit/{method?}'
 */
RoleEditScreen02597cf375eb4c2740bbe399620e2a45.get = (args: { role: string | number, method?: string | number } | [role: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleEditScreen02597cf375eb4c2740bbe399620e2a45.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/{role}/edit/{method?}'
 */
RoleEditScreen02597cf375eb4c2740bbe399620e2a45.head = (args: { role: string | number, method?: string | number } | [role: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RoleEditScreen02597cf375eb4c2740bbe399620e2a45.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/{role}/edit/{method?}'
 */
RoleEditScreen02597cf375eb4c2740bbe399620e2a45.post = (args: { role: string | number, method?: string | number } | [role: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RoleEditScreen02597cf375eb4c2740bbe399620e2a45.url(args, options),
    method: 'post',
})

    /**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/create/{method?}'
 */
const RoleEditScreen51310b1e94f2272b0529e84942f92218 = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleEditScreen51310b1e94f2272b0529e84942f92218.url(args, options),
    method: 'get',
})

RoleEditScreen51310b1e94f2272b0529e84942f92218.definition = {
    methods: ["get","head","post"],
    url: '/admin/roles/create/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/create/{method?}'
 */
RoleEditScreen51310b1e94f2272b0529e84942f92218.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RoleEditScreen51310b1e94f2272b0529e84942f92218.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/create/{method?}'
 */
RoleEditScreen51310b1e94f2272b0529e84942f92218.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleEditScreen51310b1e94f2272b0529e84942f92218.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/create/{method?}'
 */
RoleEditScreen51310b1e94f2272b0529e84942f92218.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RoleEditScreen51310b1e94f2272b0529e84942f92218.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Role\RoleEditScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleEditScreen.php:43
 * @route '/admin/roles/create/{method?}'
 */
RoleEditScreen51310b1e94f2272b0529e84942f92218.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RoleEditScreen51310b1e94f2272b0529e84942f92218.url(args, options),
    method: 'post',
})

const RoleEditScreen = {
    '/admin/roles/{role}/edit/{method?}': RoleEditScreen02597cf375eb4c2740bbe399620e2a45,
    '/admin/roles/create/{method?}': RoleEditScreen51310b1e94f2272b0529e84942f92218,
}

export default RoleEditScreen
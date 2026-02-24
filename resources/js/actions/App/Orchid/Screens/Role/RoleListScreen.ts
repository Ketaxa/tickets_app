import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
const RoleListScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleListScreen.url(args, options),
    method: 'get',
})

RoleListScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/roles/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
RoleListScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return RoleListScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
RoleListScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RoleListScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
RoleListScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RoleListScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
RoleListScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RoleListScreen.url(args, options),
    method: 'post',
})
export default RoleListScreen
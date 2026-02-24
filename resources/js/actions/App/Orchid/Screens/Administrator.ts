import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
const Administrator = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Administrator.url(args, options),
    method: 'get',
})

Administrator.definition = {
    methods: ["get","head","post"],
    url: '/admin/administrator/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
Administrator.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return Administrator.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
Administrator.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Administrator.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
Administrator.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Administrator.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
Administrator.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: Administrator.url(args, options),
    method: 'post',
})
export default Administrator
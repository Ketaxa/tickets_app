import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
const PlatformScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PlatformScreen.url(args, options),
    method: 'get',
})

PlatformScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/main/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
PlatformScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PlatformScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
PlatformScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PlatformScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
PlatformScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PlatformScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
PlatformScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PlatformScreen.url(args, options),
    method: 'post',
})
export default PlatformScreen
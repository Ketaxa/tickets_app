import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
const ExampleGridScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleGridScreen.url(args, options),
    method: 'get',
})

ExampleGridScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/grid/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
ExampleGridScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleGridScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
ExampleGridScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleGridScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
ExampleGridScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleGridScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
ExampleGridScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleGridScreen.url(args, options),
    method: 'post',
})
export default ExampleGridScreen
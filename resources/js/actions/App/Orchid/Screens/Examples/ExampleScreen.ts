import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
const ExampleScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleScreen.url(args, options),
    method: 'get',
})

ExampleScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/example/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
ExampleScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
ExampleScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
ExampleScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
ExampleScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleScreen.url(args, options),
    method: 'post',
})
export default ExampleScreen
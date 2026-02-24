import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
const ExampleChartsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleChartsScreen.url(args, options),
    method: 'get',
})

ExampleChartsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/charts/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
ExampleChartsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleChartsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
ExampleChartsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleChartsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
ExampleChartsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleChartsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
ExampleChartsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleChartsScreen.url(args, options),
    method: 'post',
})
export default ExampleChartsScreen
import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
const ExampleLayoutsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleLayoutsScreen.url(args, options),
    method: 'get',
})

ExampleLayoutsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/layouts/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
ExampleLayoutsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleLayoutsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
ExampleLayoutsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleLayoutsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
ExampleLayoutsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleLayoutsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
ExampleLayoutsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleLayoutsScreen.url(args, options),
    method: 'post',
})
export default ExampleLayoutsScreen
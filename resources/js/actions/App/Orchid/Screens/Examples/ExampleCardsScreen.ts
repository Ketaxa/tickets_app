import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
const ExampleCardsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleCardsScreen.url(args, options),
    method: 'get',
})

ExampleCardsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/cards/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
ExampleCardsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleCardsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
ExampleCardsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleCardsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
ExampleCardsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleCardsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
ExampleCardsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleCardsScreen.url(args, options),
    method: 'post',
})
export default ExampleCardsScreen
import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
const ExampleActionsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleActionsScreen.url(args, options),
    method: 'get',
})

ExampleActionsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/actions/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
ExampleActionsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleActionsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
ExampleActionsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleActionsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
ExampleActionsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleActionsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
ExampleActionsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleActionsScreen.url(args, options),
    method: 'post',
})
export default ExampleActionsScreen
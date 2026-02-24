import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
const ExampleFieldsAdvancedScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleFieldsAdvancedScreen.url(args, options),
    method: 'get',
})

ExampleFieldsAdvancedScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/advanced/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
ExampleFieldsAdvancedScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleFieldsAdvancedScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
ExampleFieldsAdvancedScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleFieldsAdvancedScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
ExampleFieldsAdvancedScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleFieldsAdvancedScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
ExampleFieldsAdvancedScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleFieldsAdvancedScreen.url(args, options),
    method: 'post',
})
export default ExampleFieldsAdvancedScreen
import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
const ExampleFieldsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleFieldsScreen.url(args, options),
    method: 'get',
})

ExampleFieldsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/fields/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
ExampleFieldsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleFieldsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
ExampleFieldsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleFieldsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
ExampleFieldsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleFieldsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
ExampleFieldsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleFieldsScreen.url(args, options),
    method: 'post',
})
export default ExampleFieldsScreen
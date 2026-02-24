import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
const ExampleTextEditorsScreen = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleTextEditorsScreen.url(args, options),
    method: 'get',
})

ExampleTextEditorsScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/editors/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
ExampleTextEditorsScreen.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ExampleTextEditorsScreen.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
ExampleTextEditorsScreen.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExampleTextEditorsScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
ExampleTextEditorsScreen.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExampleTextEditorsScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
ExampleTextEditorsScreen.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ExampleTextEditorsScreen.url(args, options),
    method: 'post',
})
export default ExampleTextEditorsScreen
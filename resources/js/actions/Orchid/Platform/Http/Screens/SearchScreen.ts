import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
const SearchScreen = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchScreen.url(args, options),
    method: 'get',
})

SearchScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/search/{query}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
SearchScreen.url = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    query: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        query: args.query,
                                method: args.method,
                }

    return SearchScreen.definition.url
            .replace('{query}', parsedArgs.query.toString())
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
SearchScreen.get = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchScreen.url(args, options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
SearchScreen.head = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SearchScreen.url(args, options),
    method: 'head',
})
/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
SearchScreen.post = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: SearchScreen.url(args, options),
    method: 'post',
})
export default SearchScreen
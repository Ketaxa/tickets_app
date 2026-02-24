import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::fallback
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:26
 * @route '/admin/{fallbackPlaceholder}'
 */
export const fallback = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fallback.url(args, options),
    method: 'get',
})

fallback.definition = {
    methods: ["get","head"],
    url: '/admin/{fallbackPlaceholder}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::fallback
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:26
 * @route '/admin/{fallbackPlaceholder}'
 */
fallback.url = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fallbackPlaceholder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fallbackPlaceholder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fallbackPlaceholder: args.fallbackPlaceholder,
                }

    return fallback.definition.url
            .replace('{fallbackPlaceholder}', parsedArgs.fallbackPlaceholder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::fallback
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:26
 * @route '/admin/{fallbackPlaceholder}'
 */
fallback.get = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fallback.url(args, options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\IndexController::fallback
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:26
 * @route '/admin/{fallbackPlaceholder}'
 */
fallback.head = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fallback.url(args, options),
    method: 'head',
})
const IndexController = { index, fallback }

export default IndexController
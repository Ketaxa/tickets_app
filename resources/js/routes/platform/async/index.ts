import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::listener
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:49
 * @route '/admin/listener/{screen}/{layout}'
 */
export const listener = (args: { screen: string | number, layout: string | number } | [screen: string | number, layout: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listener.url(args, options),
    method: 'post',
})

listener.definition = {
    methods: ["post"],
    url: '/admin/listener/{screen}/{layout}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::listener
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:49
 * @route '/admin/listener/{screen}/{layout}'
 */
listener.url = (args: { screen: string | number, layout: string | number } | [screen: string | number, layout: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    screen: args[0],
                    layout: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        screen: args.screen,
                                layout: args.layout,
                }

    return listener.definition.url
            .replace('{screen}', parsedArgs.screen.toString())
            .replace('{layout}', parsedArgs.layout.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::listener
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:49
 * @route '/admin/listener/{screen}/{layout}'
 */
listener.post = (args: { screen: string | number, layout: string | number } | [screen: string | number, layout: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listener.url(args, options),
    method: 'post',
})
const async = {
    listener: Object.assign(listener, listener),
}

export default async
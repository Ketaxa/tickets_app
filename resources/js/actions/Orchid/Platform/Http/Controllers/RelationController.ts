import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\RelationController::view
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
export const view = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: view.url(options),
    method: 'post',
})

view.definition = {
    methods: ["post"],
    url: '/admin/systems/relation',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\RelationController::view
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
view.url = (options?: RouteQueryOptions) => {
    return view.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\RelationController::view
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
view.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: view.url(options),
    method: 'post',
})
const RelationController = { view }

export default RelationController
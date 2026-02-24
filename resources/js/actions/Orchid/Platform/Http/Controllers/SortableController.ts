import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\SortableController::saveSortOrder
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
export const saveSortOrder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveSortOrder.url(options),
    method: 'post',
})

saveSortOrder.definition = {
    methods: ["post"],
    url: '/admin/systems/sorting',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\SortableController::saveSortOrder
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
saveSortOrder.url = (options?: RouteQueryOptions) => {
    return saveSortOrder.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\SortableController::saveSortOrder
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
saveSortOrder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveSortOrder.url(options),
    method: 'post',
})
const SortableController = { saveSortOrder }

export default SortableController
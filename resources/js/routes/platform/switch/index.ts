import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/admin/switch-logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})
const switchMethod = {
    logout: Object.assign(logout, logout),
}

export default switchMethod
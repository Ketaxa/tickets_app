import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::auth
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
export const auth = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

auth.definition = {
    methods: ["post"],
    url: '/admin/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::auth
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
auth.url = (options?: RouteQueryOptions) => {
    return auth.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::auth
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
auth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::lock
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
export const lock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lock.url(options),
    method: 'get',
})

lock.definition = {
    methods: ["get","head"],
    url: '/admin/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::lock
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
lock.url = (options?: RouteQueryOptions) => {
    return lock.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::lock
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
lock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lock.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::lock
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
lock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lock.url(options),
    method: 'head',
})
const login = {
    auth: Object.assign(auth, auth),
lock: Object.assign(lock, lock),
}

export default login
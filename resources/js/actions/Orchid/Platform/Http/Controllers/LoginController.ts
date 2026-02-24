import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::showLoginForm
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::showLoginForm
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::showLoginForm
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::showLoginForm
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/admin/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:73
 * @route '/admin/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::resetCookieLockMe
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
export const resetCookieLockMe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resetCookieLockMe.url(options),
    method: 'get',
})

resetCookieLockMe.definition = {
    methods: ["get","head"],
    url: '/admin/lock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::resetCookieLockMe
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
resetCookieLockMe.url = (options?: RouteQueryOptions) => {
    return resetCookieLockMe.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::resetCookieLockMe
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
resetCookieLockMe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resetCookieLockMe.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::resetCookieLockMe
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:137
 * @route '/admin/lock'
 */
resetCookieLockMe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: resetCookieLockMe.url(options),
    method: 'head',
})

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
const switchLogout81a101b4e1b267daade1dc1ecd3e54dc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url(options),
    method: 'get',
})

switchLogout81a101b4e1b267daade1dc1ecd3e54dc.definition = {
    methods: ["get","head"],
    url: '/admin/switch-logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url = (options?: RouteQueryOptions) => {
    return switchLogout81a101b4e1b267daade1dc1ecd3e54dc.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
switchLogout81a101b4e1b267daade1dc1ecd3e54dc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
switchLogout81a101b4e1b267daade1dc1ecd3e54dc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url(options),
    method: 'head',
})

    /**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
const switchLogout81a101b4e1b267daade1dc1ecd3e54dc = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url(options),
    method: 'post',
})

switchLogout81a101b4e1b267daade1dc1ecd3e54dc.definition = {
    methods: ["post"],
    url: '/admin/switch-logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url = (options?: RouteQueryOptions) => {
    return switchLogout81a101b4e1b267daade1dc1ecd3e54dc.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::switchLogout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:147
 * @route '/admin/switch-logout'
 */
switchLogout81a101b4e1b267daade1dc1ecd3e54dc.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchLogout81a101b4e1b267daade1dc1ecd3e54dc.url(options),
    method: 'post',
})

export const switchLogout = {
    '/admin/switch-logout': switchLogout81a101b4e1b267daade1dc1ecd3e54dc,
    '/admin/switch-logout': switchLogout81a101b4e1b267daade1dc1ecd3e54dc,
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:160
 * @route '/admin/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:160
 * @route '/admin/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::logout
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:160
 * @route '/admin/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})
const LoginController = { showLoginForm, login, resetCookieLockMe, switchLogout, logout }

export default LoginController
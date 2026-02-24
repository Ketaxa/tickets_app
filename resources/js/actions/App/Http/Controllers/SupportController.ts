import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/'
 */
const login980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'post',
})

login980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["post"],
    url: '/',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/'
 */
login980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return login980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/'
 */
login980bb49ee7ae63891f1d891d2fbcf1c9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/support'
 */
const login5d77483ae26e2ccf08c0552f82051403 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login5d77483ae26e2ccf08c0552f82051403.url(options),
    method: 'post',
})

login5d77483ae26e2ccf08c0552f82051403.definition = {
    methods: ["post"],
    url: '/support',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/support'
 */
login5d77483ae26e2ccf08c0552f82051403.url = (options?: RouteQueryOptions) => {
    return login5d77483ae26e2ccf08c0552f82051403.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportController::login
 * @see app/Http/Controllers/SupportController.php:30
 * @route '/support'
 */
login5d77483ae26e2ccf08c0552f82051403.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login5d77483ae26e2ccf08c0552f82051403.url(options),
    method: 'post',
})

export const login = {
    '/': login980bb49ee7ae63891f1d891d2fbcf1c9,
    '/support': login5d77483ae26e2ccf08c0552f82051403,
}

/**
* @see \App\Http\Controllers\SupportController::showLoginForm
 * @see app/Http/Controllers/SupportController.php:18
 * @route '/support'
 */
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '/support',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupportController::showLoginForm
 * @see app/Http/Controllers/SupportController.php:18
 * @route '/support'
 */
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportController::showLoginForm
 * @see app/Http/Controllers/SupportController.php:18
 * @route '/support'
 */
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SupportController::showLoginForm
 * @see app/Http/Controllers/SupportController.php:18
 * @route '/support'
 */
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})
const SupportController = { login, showLoginForm }

export default SupportController
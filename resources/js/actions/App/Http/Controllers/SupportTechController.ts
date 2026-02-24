import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SupportTechController::index
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/support/tech',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupportTechController::index
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportTechController::index
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SupportTechController::index
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupportTechController::sendMessage
 * @see app/Http/Controllers/SupportTechController.php:75
 * @route '/support/tech/send'
 */
export const sendMessage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/support/tech/send',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportTechController::sendMessage
 * @see app/Http/Controllers/SupportTechController.php:75
 * @route '/support/tech/send'
 */
sendMessage.url = (options?: RouteQueryOptions) => {
    return sendMessage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportTechController::sendMessage
 * @see app/Http/Controllers/SupportTechController.php:75
 * @route '/support/tech/send'
 */
sendMessage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportTechController::close
 * @see app/Http/Controllers/SupportTechController.php:99
 * @route '/support/tech/close/{id}'
 */
export const close = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/support/tech/close/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportTechController::close
 * @see app/Http/Controllers/SupportTechController.php:99
 * @route '/support/tech/close/{id}'
 */
close.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return close.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportTechController::close
 * @see app/Http/Controllers/SupportTechController.php:99
 * @route '/support/tech/close/{id}'
 */
close.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportTechController::reopen
 * @see app/Http/Controllers/SupportTechController.php:109
 * @route '/support/tech/reopen/{id}'
 */
export const reopen = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})

reopen.definition = {
    methods: ["post"],
    url: '/support/tech/reopen/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportTechController::reopen
 * @see app/Http/Controllers/SupportTechController.php:109
 * @route '/support/tech/reopen/{id}'
 */
reopen.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return reopen.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportTechController::reopen
 * @see app/Http/Controllers/SupportTechController.php:109
 * @route '/support/tech/reopen/{id}'
 */
reopen.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen.url(args, options),
    method: 'post',
})
const SupportTechController = { index, sendMessage, close, reopen }

export default SupportTechController
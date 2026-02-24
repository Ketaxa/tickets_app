import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SupportAgentController::index
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/support/agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupportAgentController::index
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::index
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SupportAgentController::index
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SupportAgentController::createTicket
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
export const createTicket = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createTicket.url(options),
    method: 'post',
})

createTicket.definition = {
    methods: ["post"],
    url: '/support/agent/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::createTicket
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
createTicket.url = (options?: RouteQueryOptions) => {
    return createTicket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::createTicket
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
createTicket.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createTicket.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportAgentController::checkSubscription
 * @see app/Http/Controllers/SupportAgentController.php:53
 * @route '/support/agent/check'
 */
export const checkSubscription = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkSubscription.url(options),
    method: 'post',
})

checkSubscription.definition = {
    methods: ["post"],
    url: '/support/agent/check',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::checkSubscription
 * @see app/Http/Controllers/SupportAgentController.php:53
 * @route '/support/agent/check'
 */
checkSubscription.url = (options?: RouteQueryOptions) => {
    return checkSubscription.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::checkSubscription
 * @see app/Http/Controllers/SupportAgentController.php:53
 * @route '/support/agent/check'
 */
checkSubscription.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkSubscription.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportAgentController::sendMessage
 * @see app/Http/Controllers/SupportAgentController.php:138
 * @route '/support/agent/message'
 */
export const sendMessage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/support/agent/message',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::sendMessage
 * @see app/Http/Controllers/SupportAgentController.php:138
 * @route '/support/agent/message'
 */
sendMessage.url = (options?: RouteQueryOptions) => {
    return sendMessage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::sendMessage
 * @see app/Http/Controllers/SupportAgentController.php:138
 * @route '/support/agent/message'
 */
sendMessage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportAgentController::closeTicket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
export const closeTicket = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeTicket.url(options),
    method: 'post',
})

closeTicket.definition = {
    methods: ["post"],
    url: '/support/agent/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::closeTicket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
closeTicket.url = (options?: RouteQueryOptions) => {
    return closeTicket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::closeTicket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
closeTicket.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: closeTicket.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportAgentController::reopenTicket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
export const reopenTicket = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopenTicket.url(options),
    method: 'post',
})

reopenTicket.definition = {
    methods: ["post"],
    url: '/support/agent/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::reopenTicket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
reopenTicket.url = (options?: RouteQueryOptions) => {
    return reopenTicket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::reopenTicket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
reopenTicket.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopenTicket.url(options),
    method: 'post',
})
const SupportAgentController = { index, createTicket, checkSubscription, sendMessage, closeTicket, reopenTicket }

export default SupportAgentController
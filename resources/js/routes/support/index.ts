import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import agentF97990 from './agent'
import techE5135b from './tech'
/**
* @see \App\Http\Controllers\SupportAgentController::agent
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
export const agent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: agent.url(options),
    method: 'get',
})

agent.definition = {
    methods: ["get","head"],
    url: '/support/agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupportAgentController::agent
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
agent.url = (options?: RouteQueryOptions) => {
    return agent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::agent
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
agent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: agent.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SupportAgentController::agent
 * @see app/Http/Controllers/SupportAgentController.php:31
 * @route '/support/agent'
 */
agent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: agent.url(options),
    method: 'head',
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
* @see \App\Http\Controllers\SupportAgentController::close_ticket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
export const close_ticket = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close_ticket.url(options),
    method: 'post',
})

close_ticket.definition = {
    methods: ["post"],
    url: '/support/agent/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::close_ticket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
close_ticket.url = (options?: RouteQueryOptions) => {
    return close_ticket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::close_ticket
 * @see app/Http/Controllers/SupportAgentController.php:84
 * @route '/support/agent/close'
 */
close_ticket.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close_ticket.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportAgentController::reopen_ticket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
export const reopen_ticket = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen_ticket.url(options),
    method: 'post',
})

reopen_ticket.definition = {
    methods: ["post"],
    url: '/support/agent/reopen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::reopen_ticket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
reopen_ticket.url = (options?: RouteQueryOptions) => {
    return reopen_ticket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::reopen_ticket
 * @see app/Http/Controllers/SupportAgentController.php:95
 * @route '/support/agent/reopen'
 */
reopen_ticket.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reopen_ticket.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SupportTechController::tech
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
export const tech = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tech.url(options),
    method: 'get',
})

tech.definition = {
    methods: ["get","head"],
    url: '/support/tech',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SupportTechController::tech
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
tech.url = (options?: RouteQueryOptions) => {
    return tech.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportTechController::tech
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
tech.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tech.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SupportTechController::tech
 * @see app/Http/Controllers/SupportTechController.php:21
 * @route '/support/tech'
 */
tech.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tech.url(options),
    method: 'head',
})
const support = {
    agent: Object.assign(agent, agentF97990),
sendMessage: Object.assign(sendMessage, sendMessage),
close_ticket: Object.assign(close_ticket, close_ticket),
reopen_ticket: Object.assign(reopen_ticket, reopen_ticket),
tech: Object.assign(tech, techE5135b),
}

export default support
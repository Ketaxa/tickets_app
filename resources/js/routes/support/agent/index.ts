import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\SupportAgentController::create
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/support/agent/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SupportAgentController::create
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SupportAgentController::create
 * @see app/Http/Controllers/SupportAgentController.php:107
 * @route '/support/agent/create'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})
const agent = {
    create: Object.assign(create, create),
}

export default agent
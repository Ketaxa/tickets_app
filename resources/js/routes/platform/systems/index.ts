import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
import files from './files'
/**
* @see \Orchid\Platform\Http\Controllers\RelationController::relation
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
export const relation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: relation.url(options),
    method: 'post',
})

relation.definition = {
    methods: ["post"],
    url: '/admin/systems/relation',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\RelationController::relation
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
relation.url = (options?: RouteQueryOptions) => {
    return relation.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\RelationController::relation
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/RelationController.php:21
 * @route '/admin/systems/relation'
 */
relation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: relation.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\SortableController::sorting
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
export const sorting = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sorting.url(options),
    method: 'post',
})

sorting.definition = {
    methods: ["post"],
    url: '/admin/systems/sorting',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\SortableController::sorting
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
sorting.url = (options?: RouteQueryOptions) => {
    return sorting.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\SortableController::sorting
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/SortableController.php:16
 * @route '/admin/systems/sorting'
 */
sorting.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sorting.url(options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
export const users = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(args, options),
    method: 'get',
})

users.definition = {
    methods: ["get","head","post"],
    url: '/admin/users/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
users.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { method: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    method: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        method: args?.method,
                }

    return users.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
users.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
users.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: users.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserListScreen::__invoke
 * @see app/Orchid/Screens/User/UserListScreen.php:43
 * @route '/admin/users/{method?}'
 */
users.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: users.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
export const roles = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roles.url(args, options),
    method: 'get',
})

roles.definition = {
    methods: ["get","head","post"],
    url: '/admin/roles/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
roles.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { method: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    method: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        method: args?.method,
                }

    return roles.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
roles.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roles.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
roles.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: roles.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Role\RoleListScreen::__invoke
 * @see app/Orchid/Screens/Role/RoleListScreen.php:43
 * @route '/admin/roles/{method?}'
 */
roles.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: roles.url(args, options),
    method: 'post',
})
const systems = {
    files: Object.assign(files, files),
relation: Object.assign(relation, relation),
sorting: Object.assign(sorting, sorting),
users: Object.assign(users, users),
roles: Object.assign(roles, roles),
}

export default systems
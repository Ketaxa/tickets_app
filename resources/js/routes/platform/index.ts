import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
import asyncC3cf86 from './async'
import systems from './systems'
import api from './api'
import loginDf2c2a from './login'
import switchMethod from './switch'
import example586004 from './example'
import administratorE635d1 from './administrator'
/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\IndexController::index
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/IndexController.php:18
 * @route '/admin'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
export const search = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head","post"],
    url: '/admin/search/{query}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
search.url = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    query: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "method",
        ])

    const parsedArgs = {
                        query: args.query,
                                method: args.method,
                }

    return search.definition.url
            .replace('{query}', parsedArgs.query.toString())
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
search.get = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
search.head = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})
/**
* @see \Orchid\Platform\Http\Screens\SearchScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/SearchScreen.php:43
 * @route '/admin/search/{query}/{method?}'
 */
search.post = (args: { query: string | number, method?: string | number } | [query: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(args, options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::async
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:18
 * @route '/admin/async'
 */
export const async = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: async.url(options),
    method: 'post',
})

async.definition = {
    methods: ["post"],
    url: '/admin/async',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::async
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:18
 * @route '/admin/async'
 */
async.url = (options?: RouteQueryOptions) => {
    return async.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AsyncController::async
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AsyncController.php:18
 * @route '/admin/async'
 */
async.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: async.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
export const notifications = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(args, options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head","post"],
    url: '/admin/notifications/{id?}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
notifications.url = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "id",
            "method",
        ])

    const parsedArgs = {
                        id: args?.id,
                                method: args?.method,
                }

    return notifications.definition.url
            .replace('{id?}', parsedArgs.id?.toString() ?? '')
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
notifications.get = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(args, options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
notifications.head = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(args, options),
    method: 'head',
})
/**
* @see \Orchid\Platform\Http\Screens\NotificationScreen::__invoke
 * @see vendor/orchid/platform/src/Platform/Http/Screens/NotificationScreen.php:43
 * @route '/admin/notifications/{id?}/{method?}'
 */
notifications.post = (args?: { id?: string | number, method?: string | number } | [id: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: notifications.url(args, options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Orchid\Platform\Http\Controllers\LoginController::login
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/LoginController.php:119
 * @route '/admin/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

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

/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
export const main = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(args, options),
    method: 'get',
})

main.definition = {
    methods: ["get","head","post"],
    url: '/admin/main/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
main.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return main.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
main.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
main.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: main.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\PlatformScreen::__invoke
 * @see app/Orchid/Screens/PlatformScreen.php:43
 * @route '/admin/main/{method?}'
 */
main.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: main.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
export const profile = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head","post"],
    url: '/admin/profile/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
profile.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return profile.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
profile.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
profile.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\User\UserProfileScreen::__invoke
 * @see app/Orchid/Screens/User/UserProfileScreen.php:43
 * @route '/admin/profile/{method?}'
 */
profile.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: profile.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
export const example = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: example.url(args, options),
    method: 'get',
})

example.definition = {
    methods: ["get","head","post"],
    url: '/admin/example/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
example.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return example.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
example.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: example.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
example.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: example.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleScreen.php:43
 * @route '/admin/example/{method?}'
 */
example.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: example.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
export const administrator = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: administrator.url(args, options),
    method: 'get',
})

administrator.definition = {
    methods: ["get","head","post"],
    url: '/admin/administrator/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
administrator.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return administrator.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
administrator.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: administrator.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
administrator.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: administrator.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Administrator::__invoke
 * @see app/Orchid/Screens/Administrator.php:43
 * @route '/admin/administrator/{method?}'
 */
administrator.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: administrator.url(args, options),
    method: 'post',
})
const platform = {
    index: Object.assign(index, index),
search: Object.assign(search, search),
async: Object.assign(async, asyncC3cf86),
systems: Object.assign(systems, systems),
notifications: Object.assign(notifications, notifications),
api: Object.assign(api, api),
login: Object.assign(login, loginDf2c2a),
switch: Object.assign(switchMethod, switchMethod),
logout: Object.assign(logout, logout),
main: Object.assign(main, main),
profile: Object.assign(profile, profile),
example: Object.assign(example, example586004),
administrator: Object.assign(administrator, administratorE635d1),
}

export default platform
import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::upload
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:44
 * @route '/admin/systems/files'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/admin/systems/files',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::upload
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:44
 * @route '/admin/systems/files'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::upload
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:44
 * @route '/admin/systems/files'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::media
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:124
 * @route '/admin/systems/media'
 */
export const media = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: media.url(options),
    method: 'post',
})

media.definition = {
    methods: ["post"],
    url: '/admin/systems/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::media
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:124
 * @route '/admin/systems/media'
 */
media.url = (options?: RouteQueryOptions) => {
    return media.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::media
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:124
 * @route '/admin/systems/media'
 */
media.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: media.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::sort
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:58
 * @route '/admin/systems/files/sort'
 */
export const sort = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sort.url(options),
    method: 'post',
})

sort.definition = {
    methods: ["post"],
    url: '/admin/systems/files/sort',
} satisfies RouteDefinition<["post"]>

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::sort
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:58
 * @route '/admin/systems/files/sort'
 */
sort.url = (options?: RouteQueryOptions) => {
    return sort.definition.url + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::sort
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:58
 * @route '/admin/systems/files/sort'
 */
sort.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sort.url(options),
    method: 'post',
})

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::destroy
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:71
 * @route '/admin/systems/files/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/systems/files/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::destroy
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:71
 * @route '/admin/systems/files/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::destroy
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:71
 * @route '/admin/systems/files/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::update
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:80
 * @route '/admin/systems/files/post/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/systems/files/post/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::update
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:80
 * @route '/admin/systems/files/post/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Orchid\Platform\Http\Controllers\AttachmentController::update
 * @see vendor/orchid/platform/src/Platform/Http/Controllers/AttachmentController.php:80
 * @route '/admin/systems/files/post/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
const AttachmentController = { upload, media, sort, destroy, update }

export default AttachmentController
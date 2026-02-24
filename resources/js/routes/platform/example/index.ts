import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
export const fields = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fields.url(args, options),
    method: 'get',
})

fields.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/fields/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
fields.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return fields.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
fields.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fields.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
fields.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fields.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsScreen.php:43
 * @route '/admin/examples/form/fields/{method?}'
 */
fields.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fields.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
export const advanced = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: advanced.url(args, options),
    method: 'get',
})

advanced.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/advanced/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
advanced.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return advanced.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
advanced.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: advanced.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
advanced.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: advanced.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleFieldsAdvancedScreen.php:43
 * @route '/admin/examples/form/advanced/{method?}'
 */
advanced.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: advanced.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
export const editors = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editors.url(args, options),
    method: 'get',
})

editors.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/editors/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
editors.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return editors.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
editors.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editors.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
editors.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editors.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleTextEditorsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleTextEditorsScreen.php:43
 * @route '/admin/examples/form/editors/{method?}'
 */
editors.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editors.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
export const actions = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: actions.url(args, options),
    method: 'get',
})

actions.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/form/actions/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
actions.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return actions.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
actions.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: actions.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
actions.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: actions.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleActionsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleActionsScreen.php:43
 * @route '/admin/examples/form/actions/{method?}'
 */
actions.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: actions.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
export const layouts = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layouts.url(args, options),
    method: 'get',
})

layouts.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/layouts/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
layouts.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return layouts.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
layouts.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layouts.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
layouts.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: layouts.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleLayoutsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleLayoutsScreen.php:43
 * @route '/admin/examples/layouts/{method?}'
 */
layouts.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: layouts.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
export const grid = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grid.url(args, options),
    method: 'get',
})

grid.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/grid/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
grid.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return grid.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
grid.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grid.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
grid.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grid.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleGridScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleGridScreen.php:43
 * @route '/admin/examples/grid/{method?}'
 */
grid.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grid.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
export const charts = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: charts.url(args, options),
    method: 'get',
})

charts.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/charts/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
charts.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return charts.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
charts.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: charts.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
charts.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: charts.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleChartsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleChartsScreen.php:43
 * @route '/admin/examples/charts/{method?}'
 */
charts.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: charts.url(args, options),
    method: 'post',
})

/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
export const cards = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(args, options),
    method: 'get',
})

cards.definition = {
    methods: ["get","head","post"],
    url: '/admin/examples/cards/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
cards.url = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return cards.definition.url
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
cards.get = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
cards.head = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cards.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\Examples\ExampleCardsScreen::__invoke
 * @see app/Orchid/Screens/Examples/ExampleCardsScreen.php:43
 * @route '/admin/examples/cards/{method?}'
 */
cards.post = (args?: { method?: string | number } | [method: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cards.url(args, options),
    method: 'post',
})
const example = {
    fields: Object.assign(fields, fields),
advanced: Object.assign(advanced, advanced),
editors: Object.assign(editors, editors),
actions: Object.assign(actions, actions),
layouts: Object.assign(layouts, layouts),
grid: Object.assign(grid, grid),
charts: Object.assign(charts, charts),
cards: Object.assign(cards, cards),
}

export default example
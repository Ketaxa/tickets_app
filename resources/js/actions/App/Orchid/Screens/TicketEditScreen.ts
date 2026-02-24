import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
const TicketEditScreen = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TicketEditScreen.url(args, options),
    method: 'get',
})

TicketEditScreen.definition = {
    methods: ["get","head","post"],
    url: '/admin/administrator/{ticket?}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
TicketEditScreen.url = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    ticket: args[0],
                    method: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "ticket",
            "method",
        ])

    const parsedArgs = {
                        ticket: args?.ticket,
                                method: args?.method,
                }

    return TicketEditScreen.definition.url
            .replace('{ticket?}', parsedArgs.ticket?.toString() ?? '')
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
TicketEditScreen.get = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TicketEditScreen.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
TicketEditScreen.head = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TicketEditScreen.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
TicketEditScreen.post = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: TicketEditScreen.url(args, options),
    method: 'post',
})
export default TicketEditScreen
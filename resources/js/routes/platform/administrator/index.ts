import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
export const ticket = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ticket.url(args, options),
    method: 'get',
})

ticket.definition = {
    methods: ["get","head","post"],
    url: '/admin/administrator/{ticket?}/{method?}',
} satisfies RouteDefinition<["get","head","post"]>

/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
ticket.url = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions) => {
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

    return ticket.definition.url
            .replace('{ticket?}', parsedArgs.ticket?.toString() ?? '')
            .replace('{method?}', parsedArgs.method?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
ticket.get = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ticket.url(args, options),
    method: 'get',
})
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
ticket.head = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ticket.url(args, options),
    method: 'head',
})
/**
* @see \App\Orchid\Screens\TicketEditScreen::__invoke
 * @see app/Orchid/Screens/TicketEditScreen.php:43
 * @route '/admin/administrator/{ticket?}/{method?}'
 */
ticket.post = (args?: { ticket?: string | number, method?: string | number } | [ticket: string | number, method: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ticket.url(args, options),
    method: 'post',
})
const administrator = {
    ticket: Object.assign(ticket, ticket),
}

export default administrator
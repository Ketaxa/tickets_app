import PlatformScreen from './PlatformScreen'
import User from './User'
import Role from './Role'
import Examples from './Examples'
import Administrator from './Administrator'
import TicketEditScreen from './TicketEditScreen'
const Screens = {
    PlatformScreen: Object.assign(PlatformScreen, PlatformScreen),
User: Object.assign(User, User),
Role: Object.assign(Role, Role),
Examples: Object.assign(Examples, Examples),
Administrator: Object.assign(Administrator, Administrator),
TicketEditScreen: Object.assign(TicketEditScreen, TicketEditScreen),
}

export default Screens
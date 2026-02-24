import SupportController from './SupportController'
import SupportAgentController from './SupportAgentController'
import SupportTechController from './SupportTechController'
const Controllers = {
    SupportController: Object.assign(SupportController, SupportController),
SupportAgentController: Object.assign(SupportAgentController, SupportAgentController),
SupportTechController: Object.assign(SupportTechController, SupportTechController),
}

export default Controllers
import IndexController from './IndexController'
import AsyncController from './AsyncController'
import AttachmentController from './AttachmentController'
import RelationController from './RelationController'
import SortableController from './SortableController'
import LoginController from './LoginController'
const Controllers = {
    IndexController: Object.assign(IndexController, IndexController),
AsyncController: Object.assign(AsyncController, AsyncController),
AttachmentController: Object.assign(AttachmentController, AttachmentController),
RelationController: Object.assign(RelationController, RelationController),
SortableController: Object.assign(SortableController, SortableController),
LoginController: Object.assign(LoginController, LoginController),
}

export default Controllers
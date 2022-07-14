import { TodoAside,TodoAsideCloseIcon, TodoLog } from './TodoAside.js' 
import { TodoHeader, TodoHeaderTitle, TodoHeaderMenu } from './TodoHeader.js' 
import { TodoSection, TodoSectionHeader, BlueLine } from './TodoSection.js'
import { TodoCard } from './TodoCard.js'
import { TodoMain } from './TodoMain.js'
import {TodoContainer} from './TodoContainer.js'


customElements.define('todo-main',TodoMain)

customElements.define('todo-header',TodoHeader)
customElements.define('todo-header-title',TodoHeaderTitle)
customElements.define('todo-header-menu',TodoHeaderMenu)

customElements.define('todo-aside-close-icon',TodoAsideCloseIcon)
customElements.define('todo-aside',TodoAside)
customElements.define('todo-log', TodoLog)

customElements.define('todo-container', TodoContainer)

customElements.define('todo-section', TodoSection)
customElements.define('todo-section-header', TodoSectionHeader)
customElements.define('todo-card', TodoCard)
customElements.define('blue-line', BlueLine)

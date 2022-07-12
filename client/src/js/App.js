import { TodoAside,TodoAsideCloseIcon } from './TodoAside.js' 
import { TodoHeader, TodoHeaderTitle, TodoHeaderMenu } from './TodoHeader.js' 
import { TodoCard } from './TodoCard.js'

customElements.define('todo-header',TodoHeader)
customElements.define('todo-header-title',TodoHeaderTitle)
customElements.define('todo-header-menu',TodoHeaderMenu)

customElements.define('todo-aside-close-icon',TodoAsideCloseIcon)
customElements.define('todo-aside',TodoAside)

customElements.define('todo-card', TodoCard)

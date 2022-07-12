class TodoAside extends HTMLElement{
    constructor(){
        super();
    } 

    connectedCallback(){
        console.log('todo-aside')
        this.connectWithTodoHeaderMenu()
    }
    connectWithTodoHeaderMenu(){
        const $todoHeaderMenu = document.querySelector('todo-header-menu')
        $todoHeaderMenu.connectWithTodoAside(this)
    }
    open(){
        this.style.right = '0%'
    }
    close(){
        this.style.right = '-100%'
    }
}

export { TodoAside }
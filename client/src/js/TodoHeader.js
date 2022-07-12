export class TodoHeader extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        console.log('todoheader')
    }
}

export class TodoHeaderMenu extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.addEventListener('click',this.onClick)
        console.log(this)
    }

    onClick(){
        this.$aside.open();

    }
    connectWithTodoAside($el){
        this.$aside = $el
        console.log('k',this.$aside)
    }
}

export class TodoHeaderTitle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        console.log('todo-t')
    }
}
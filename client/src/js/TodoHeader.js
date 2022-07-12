export class TodoHeader extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        
    }
}

export class TodoHeaderMenu extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.addEventListener('click',this.onClick)
        
    }

    onClick(){
        this.$aside.open();

    }
    connectWithTodoAside($el){
        this.$aside = $el
    }
}

export class TodoHeaderTitle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
    }
}
export class TodoMain extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.dragging = false;
        this.addEventListener('pointermove', this.handlePointerMove)
        this.addEventListener('mouseup', this.handelMouseUp.bind(this))
        this.addEventListener('mouseleave', this.handelMouseOut.bind(this))
    }

    handelMouseOut(){
        if(this.dragging){
            this.handleDestroy()
           this.dragging = false
        }
    }

    handelMouseUp(){
        //check;
        if(this.dragging){
            this.handleDestroy()
            this.dragging = false
        }
    }
    handlePointerMove(e) {
        if(this.dragging && this.$dragTodoCard) {
        
            const diffX = e.movementX;
            const diffY = e.movementY;

            const originX = +this.$dragTodoCard.getAttribute('x');
            const originY = +this.$dragTodoCard.getAttribute('y');
            
            const newX = originX + diffX;
            const newY = originY + diffY;

            this.$dragTodoCard.setAttribute('x', newX)
            this.$dragTodoCard.setAttribute('y', newY)
        }
    }

    handleAppendChild($dragTodoCard, $placeTodoCard){
        if(this.dragging) return;
        this.dragging = true;
        this.dragTodoOriginX = +$dragTodoCard.getAttribute('x');
        this.dragTodoOriginY = +$dragTodoCard.getAttribute('y');
        if(this.$dragTodoCard){
            this.handleDestroy()
        }
        this.$dragTodoCard = $dragTodoCard
        this.$placeTodoCard= $placeTodoCard
        this.$placeTodoCard.setAttribute('state','place')
        this.appendChild($dragTodoCard)
    }
    handleDestroy(){ 
        if(this.$dragTodoCard instanceof HTMLElement) {
           this.$dragTodoCard.addEventListener("transitionend", this.updateTransition.bind(this), true);
           this.$dragTodoCard.style.transition = 'all 0.5s'
            this.$dragTodoCard.style.top = `${this.dragTodoOriginY}px`
            this.$dragTodoCard.style.left = `${this.dragTodoOriginX}px`
            this.$dragTodoCard.style.opacity = 0;
            //this.$dragTodoCard.style.height = `0px`
            //this.removeChild(this.$dragTodoCard )
           // this.$dragTodoCard = null
        }
        if(this.$placeTodoCard instanceof HTMLElement){
            this.$placeTodoCard.setAttribute('state','default')
            this.$placeTodoCard = null
        }
    }
    updateTransition(){
        if(this.$dragTodoCard instanceof HTMLElement){
       this.removeChild(this.$dragTodoCard)
       this.$dragTodoCard = null
        }
    }
}
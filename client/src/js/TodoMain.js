export class TodoMain extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.dragging = false;
        this.addEventListener('pointermove', this.handlePointerMove)
        this.addEventListener('mouseup', this.handelMouseUp.bind(this))
    }

    handelMouseUp(){
        //check;
        if(this.$dragTodoCard){
            this.handleDestroy()
        }
    }
    handlePointerMove(e) {
        if(this.dragging && this.$dragTodoCard) {
            //console.log(e.movementX, e.movementY)
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

        this.dragging = true;
     
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
            this.removeChild(this.$dragTodoCard )
            this.$dragTodoCard = null
        }
        if(this.$placeTodoCard instanceof HTMLElement){
            this.$placeTodoCard.setAttribute('state','default')
            this.$placeTodoCard = null
        }
    }
}
import { getSections } from "../api/todoSection.js";
import { TodoSection} from "../js/TodoSection.js"
export class TodoMain extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.init()
        this.dragging = false;
        this.addEventListener('pointermove', this.handlePointerMove)
        this.addEventListener('pointerup', this.handelMouseUp.bind(this))
        this.addEventListener('pointerleave', this.handelMouseOut.bind(this))
    }

    init(){
        getSections().then( (sections) => { 
            this.$sections = sections
        })
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
        $dragTodoCard.style.pointerEvents = 'none'
        $dragTodoCard.style.opacity = '0.7'
        this.appendChild($dragTodoCard)
    }
    handleDestroy(){ 
        if(this.$dragTodoCard instanceof HTMLElement) {
            const $todoContainer = document.querySelector('todo-container')
            $todoContainer.setDragTodoCard(this.$dragTodoCard);
            $todoContainer.setUpdateTransition(this.updateTransition.bind(this));
            $todoContainer.pop()   
        }
    }
    updateTransition(){
        if(this.$dragTodoCard instanceof HTMLElement){
            this.removeChild(this.$dragTodoCard)
            this.$dragTodoCard = null
        }
    }
}
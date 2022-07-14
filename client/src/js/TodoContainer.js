import { updateTodoCard } from "../api/todoCard";
import { updateSection } from "../api/todoSection";
import { getTodoSection, insertAfter } from "./util";

export class TodoContainer extends HTMLElement{
    constructor(){
        super();
    }

    get isDragging() {
        return this.moveFrom !== null
    }

    connectedCallback(){
        this.moveFrom = null;
        this.moveTo = null;
        this.$dragTodoCard = null;
    }

    setUpdateTransition(func) {
        this.updateTransition = func;
    }

    setFrom($el) {
        this.moveFrom = $el;
    }

    setTo($el) {
        this.moveTo = $el;
    }

    setDragTodoCard($el) {
        this.$dragTodoCard = $el
    }

    pop = () => {
        const moveFrom = this.moveFrom;
        const moveTo = this.moveTo;

        // 원래의 자리로 back
        if(!moveFrom || !moveTo) {
            this.$dragTodoCard.addEventListener("transitionend", this.updateTransition, true);
            this.$dragTodoCard.style.transition = 'all 0.5s'
            this.$dragTodoCard.style.top = `${moveFrom.offsetTop}px`
            this.$dragTodoCard.style.left = `${moveFrom.offsetLeft}px`
            this.$dragTodoCard.style.opacity = 0;

            moveFrom.setAttribute('state','default')
            this.setFrom(null);
            this.setTo(null);
            return
        }

        const fromId = moveFrom.getAttribute('id');
        const toId = moveTo.getAttribute('id');

        // 같은 자리로 이동
        if(fromId === toId) {
            this.$dragTodoCard.addEventListener("transitionend", this.updateTransition, true);
            this.$dragTodoCard.style.transition = 'all 0.5s'
            this.$dragTodoCard.style.top = `${moveFrom.offsetTop}px`
            this.$dragTodoCard.style.left = `${moveFrom.offsetLeft}px`
            this.$dragTodoCard.style.opacity = 0;
            moveFrom.setAttribute('state','default')
            this.setFrom(null);
            this.setTo(null);
            return
        }

        // 자리이동
        this.updateTransition()
        const toTodoSection = getTodoSection(moveTo);
        const fromTodoSection = getTodoSection(moveFrom);
        const $animationCard = moveFrom.copySelf();
        
        this.appendChild($animationCard);
        $animationCard.addEventListener('transitionend', () => {
            if(this.contains($animationCard)) {
                this.removeChild($animationCard);
            }
        })
        $animationCard.style.transition = 'all 0.5s'
        $animationCard.style.top = `${moveTo.offsetTop + moveTo.clientHeight}px`
        $animationCard.style.left = `${moveTo.offsetLeft}px`
        $animationCard.style.opacity = 0;
        fromTodoSection.removeChild(moveFrom)
        insertAfter(moveFrom, moveTo);
        moveFrom.setAttribute('state','default')
        this.setFrom(null);
        this.setTo(null);

        updateSection(toTodoSection.getAttribute('sectionId'), {title: toTodoSection.getAttribute('title'), todoCardIds: toTodoSection.getTodoCardList()})
        updateSection(fromTodoSection.getAttribute('sectionId'), {title: fromTodoSection.getAttribute('title'), todoCardIds: fromTodoSection.getTodoCardList()})
        updateTodoCard(fromId, {title: moveFrom.getAttribute('title'), contents: moveFrom.getAttribute('content'), todoSectionId: toTodoSection.getAttribute('sectionId')})
    }
    
}
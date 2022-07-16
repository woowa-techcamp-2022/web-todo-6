import { requestGetTodoCard } from "../api/todoCard.js";
import { getTodoContainer, getTodoMain } from "./util.js";
import { TodoCard } from './TodoCard.js'

class TodoSection extends HTMLElement {
    constructor() {
        super()
    }

    get width() {
        return this.clientWidth;
    }

    get left() {
        return this.offsetLeft;
    }
    
    connectedCallback(){
        this.addEventListener('pointerenter', this.handlePointerEnter)
        this.addEventListener('pointermove', this.handlePointerMove)
        this.addEventListener('pointerleave', this.handlePointerLeave)
        this.addEventListener('pointerdown', this.handlePointerDown)
        window.addEventListener('scroll', this.handleScroll)
        this.$todoContainer = getTodoContainer(this);
        this.$todoMain = getTodoMain(this);
        this.init();
    }

    init(){
        this.loadTodoCard()
    }
    loadTodoCard(){
        requestGetTodoCard().then( (todoCardData) => {
            
            const cards = this.createTodoCardElements(todoCardData)
            this.$todoMain.sections.then(sections => {
                const cardIds = sections.find(section => section.id === +this.getAttribute('sectionId')).todoCardIds
                const ordered = cards.sort((a, b) => {
                    const aIdIdx = cardIds.indexOf(a.getAttribute('id'));
                    const bIdIdx = cardIds.indexOf(b.getAttribute('id'));

                    return aIdIdx - bIdIdx
                })
                ordered.forEach(card => this.appendChild(card))    
            })
        })
    }

    createTodoCardElements(todoCards){
        const todoCardElements = [];
        todoCards.forEach( todoCard => {
            const { id, title, contents, todoSectionId } = todoCard;
            if( parseInt(todoSectionId) === parseInt(this.getAttribute('sectionId'))){
                const $todoCard = new TodoCard('default', title, contents, id)
                todoCardElements.push($todoCard)
            }
        });
        return todoCardElements;
    }

    handlePointerEnter = () => {
        if(this.$blueline) return
        const $blueline = new BlueLine();
        $blueline.setAttribute('width', this.width);
        $blueline.setAttribute('left', this.left);
        
        this.appendChild($blueline);
        this.$blueline = $blueline;
    }

    handlePointerMove = (evt) => {
        const THROTTLE_TIME = 100;
        const currentTime = new Date().valueOf();
        
        if(this.lastMoveEventTime && (currentTime - this.lastMoveEventTime < THROTTLE_TIME)) {
            return
        }

        this.lastMoveEventTime = currentTime;
        
        const cards = [];
        for(let i=0; i<this.children.length; i++) {
            const child = this.children[i];
            if(child.tagName === 'TODO-CARD') {
                cards.push(child);
            }
        }

        const mouseY = evt.clientY;
        const windowScrollY = window.scrollY
        const BLUE_LINE_MARGIN = 5;
        // this.children[0] is always TODO-SECTION-HEADER.
        // Default bluelineY is TODO-SECTION-HEADER's bottom.
        const $todoSectionHeader = this.children[0];
        let bluelineY = $todoSectionHeader.offsetTop + $todoSectionHeader.clientHeight - windowScrollY;
        this.$todoContainer.setTo($todoSectionHeader);
        for(let i=0; i<cards.length; i++) {
            const $card = cards[i];
            
            const leftTop = $card.offsetTop - windowScrollY;
            const rightBottom = $card.offsetTop + $card.clientHeight - windowScrollY;

            if((bluelineY<mouseY) && ((leftTop < mouseY && mouseY < rightBottom) || (i === cards.length - 1))) {
                bluelineY = rightBottom + BLUE_LINE_MARGIN;
                this.$todoContainer.setTo($card);
                break;
            }
        }

        this.$blueline.setAttribute('top', bluelineY)
        this.$blueline.style.opacity = this.$todoContainer.isDragging ? 1 : 0

    }

    handlePointerLeave = () => {
        if(this.$blueline && this.contains(this.$blueline)) {
            this.removeChild(this.$blueline)
            this.$blueline = null
            this.$todoContainer.setTo(null)
        }
    }

    handlePointerDown = () => {
        if(this.$blueline) {
            this.$blueline.style.opacity = 0
        }
    }

    handleScroll = () => {
        if(this.$blueline) {
            this.$blueline.style.opacity = 0
        }
    }

    getTodoCardList() {
        const list = [];

        for(let i=0; i<this.children.length; i++) {
            const child = this.children[i];

            if(child instanceof TodoCard) {
                const id = child.getAttribute('id')
                if(id) list.push(id)
            }
        }

        return list.join(',')
    }

}

class BlueLine extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() { return ['width', 'left', 'top']; }

    connectedCallback() {
        const width = this.getAttribute('width')
        const left = this.getAttribute('left')
        const top = this.getAttribute('top')

        this.style.display = 'block'
        this.style.position = 'fixed'
        this.style.backgroundColor = 'rgba(9, 105, 218, 0.3)'
        this.style.height = '3px';
        this.style.width = `${width}px`
        this.style.left = `${left}px`
        this.style.top = `${top}px`
    }

    attributeChangedCallback(name, _, newValue) {
        switch(name) {
            case 'width':
                this.style.width = `${newValue}px`
                break 
            case 'left':
                this.style.left = `${newValue}px`
                break 
            case 'top':
                this.style.top = `${newValue}px`
                break
        }
    }
}

class TodoSectionHeader extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.mountChildelements()
        this.$todoSection = this.parentElement
    }

    mountChildelements() {
        const title = this.getAttribute('title')
        const count = this.getAttribute('count')

        const $todoSectionHeaderTitle = document.createElement('todo-section-header-title')
        const $todoSectionHeaderCount = document.createElement('todo-section-header-count')
        const $todoSectionHeaderAddIcon = document.createElement('todo-section-header-add-icon')

        $todoSectionHeaderTitle.textContent = title
        $todoSectionHeaderCount.textContent = count
        $todoSectionHeaderAddIcon.textContent = '+'

        this.appendChild($todoSectionHeaderTitle)
        this.appendChild($todoSectionHeaderCount)
        this.appendChild($todoSectionHeaderAddIcon)

        $todoSectionHeaderAddIcon.addEventListener('click', this.addNewTodoCard.bind(this) )
    }

    addNewTodoCard(){
        const $todoCard = document.createElement('todo-card')
        $todoCard.setAttribute('state','active')
        this.$todoSection.appendChild($todoCard)
        const todoCard = this.$todoSection.querySelectorAll("todo-card");
        
        if(todoCard.length === 0 ){
            this.$todoSection.appendChild($todoCard)
        }else{
            this.$todoSection.insertBefore($todoCard,todoCard[0])
        }
    }
}




export { TodoSection, TodoSectionHeader, BlueLine }
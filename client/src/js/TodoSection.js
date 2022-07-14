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
    }

    handlePointerEnter = () => {
        if(this.$blueline) return
        const $blueline = document.createElement('blue-line')

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
        
        for(let i=0; i<cards.length; i++) {
            const $card = cards[i];
            
            const leftTop = $card.offsetTop - windowScrollY;
            const rightBottom = $card.offsetTop + $card.clientHeight - windowScrollY;

            if((bluelineY<mouseY) && ((leftTop < mouseY && mouseY < rightBottom) || (i === cards.length - 1))) {
                bluelineY = rightBottom + BLUE_LINE_MARGIN;
                break;
            }
        }

        this.$blueline.setAttribute('top', bluelineY)

    }

    handlePointerLeave = () => {
        if(this.$blueline && this.contains(this.$blueline)) {
            this.removeChild(this.$blueline)
            this.$blueline = null
        }
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
        
        console.log(todoCard)
        if(todoCard.length === 0 ){
            this.$todoSection.appendChild($todoCard)
        }else{
            this.$todoSection.insertBefore($todoCard,todoCard[0])
        }
    }
}




export { TodoSection, TodoSectionHeader, BlueLine }
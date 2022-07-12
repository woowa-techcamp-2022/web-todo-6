class TodoSection extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback(){
        console.log('TodoSection')   
    }
}

class TodoSectionHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.mountChildelements()
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
    }
}


export { TodoSection, TodoSectionHeader }
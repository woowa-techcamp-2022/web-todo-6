export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state']; }

    map = {
        default : ($el) => { 
            $el.className = "default"
            this.render()
        },
        active : ($el) => { 
            $el.className = "active"
            this.renderInputCard()
            this.renderButton()
     
        },
        delete : ($el) => {
            $el.className = "delete"
            this.render()
        },
        drag : ($el) => {
            $el.className = "drag"
            this.render()
        },
        place : ($el) => {
            $el.className = "place"
            this.render()
        },
        deactivate : ($el) => { 
            $el.className = "deactivate"
            this.render()
            this.renderButton()
        },
    }
  

    connectedCallback(){
        const state = this.getAttribute('state')
        this.updateState(state)

       
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'state') this.updateState(newValue) 
      }

    updateState(state){ 
        const map = this.map;
        if(map.hasOwnProperty(state)){
            map[state](this)
        }
    }

    render(){
        this.innerHTML = ""
        const $todoCardTitle = document.createElement('todo-card-title')
        const $todoCardContent = document.createElement('todo-card-content')

        $todoCardTitle.className = 'todo-card-title'
        $todoCardContent.className = 'todo-card-content'

        $todoCardTitle.innerHTML = this.getAttribute('title') 
        $todoCardContent.innerHTML = this.getAttribute('content')
 
        this.appendChild($todoCardTitle)
        this.appendChild($todoCardContent)

    }

    renderButton(){
        const $todoCardBottom = document.createElement('todo-card-Bottom')
        const $todoCardCencelButton = document.createElement('button')
        const $todoCardAccentButton = document.createElement('button')

        $todoCardCencelButton.className = 'todo-card-cencel-button'
        $todoCardAccentButton.className = 'todo-card-accent-button'

        $todoCardCencelButton.innerHTML = '취소'
        $todoCardAccentButton.innerHTML = '등록'
  
        $todoCardBottom.appendChild($todoCardCencelButton)
        $todoCardBottom.appendChild($todoCardAccentButton)

        this.appendChild($todoCardBottom)
    }

    renderInputCard(){
        this.innerHTML = ""
        const $todoCardTitleInput = document.createElement('input')
        const $todoCardContentInput = document.createElement('textarea')

        $todoCardTitleInput.setAttribute('placeholder','제목을 입력해주세요')
        $todoCardContentInput .setAttribute('placeholder','내용을 입력해주세요')

        $todoCardTitleInput.className = "todo-card-title-input todo-card-title"
        $todoCardContentInput.className = 'todo-card-content-input todo-card-content'
     
        this.appendChild($todoCardTitleInput)
        this.appendChild($todoCardContentInput )
     
    }

    renderDeleteIcon(){
        const $todoCardDeleteIcon = document.createElement('todo-card-delete-icon')
    }
   
}


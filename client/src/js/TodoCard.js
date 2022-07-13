export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state']; }

    map = {
        default : ($el) => { 
            $el.className = "default"
            this.render()
            this.renderDeleteIcon();
        },
        active : ($el) => { 
            $el.className = "active"
            this.renderInputCard()
            this.renderButton()
     
        },
        drag : ($el) => {
            $el.className = "drag"
            this.render()
        },
        place : ($el) => {
            $el.className = "place"
            this.render()
        }
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

        this.checkAccentButtonDisabled();
        
    }
    
    renderInputCard(){
        this.innerHTML = ""
        const $todoCardTitleInput = document.createElement('input')
        const $todoCardContentInput = document.createElement('textarea')

        $todoCardTitleInput.setAttribute('placeholder','제목을 입력해주세요')
        $todoCardContentInput .setAttribute('placeholder','내용을 입력해주세요')

        $todoCardTitleInput.className = "todo-card-title-input todo-card-title"
        $todoCardContentInput.className = 'todo-card-content-input todo-card-content'
     
        $todoCardTitleInput.addEventListener('input',this.checkAccentButtonDisabled)
        $todoCardContentInput.addEventListener('keyup',this.checkAccentButtonDisabled)

        this.appendChild($todoCardTitleInput)
        this.appendChild($todoCardContentInput)
     
    }

    checkAccentButtonDisabled(){
        const $todoCardTitle = document.querySelector('.todo-card-title-input')
        const $todoCardContent = document.querySelector('.todo-card-content-input')
        const $todoCardAccentButton = document.querySelector('.todo-card-accent-button')

        if($todoCardTitle.value.length > 0 && $todoCardContent.value.length > 0){
            $todoCardAccentButton.disabled = false
        }else{
            $todoCardAccentButton.disabled  = true
        }
    }

    renderDeleteIcon(){
        const $todoCardDeleteIcon = document.createElement('todo-card-delete-icon')
        $todoCardDeleteIcon.innerHTML= "X"

        $todoCardDeleteIcon.addEventListener('mouseover',this.handleDeleteIconMouseOverEvent.bind(this))
        $todoCardDeleteIcon.addEventListener('mouseout',this.handleDeleteIconMouseOutEvent.bind(this))
       
        this.appendChild($todoCardDeleteIcon)
    }
   
    handleDeleteIconMouseOverEvent(){
        this.className = 'delete'
    }
    handleDeleteIconMouseOutEvent(){
        this.className = 'default'
    }
}


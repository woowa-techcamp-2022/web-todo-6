export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state', 'x', 'y']; }

    todoStateMapper = {
        default : ($el) => { 
            $el.className = "default"
            $el.render()
            $el.renderDeleteIcon();
            $el.addEventListener('pointerdown', this.handleDefaultCardClickEvent.bind(this))
            //$el.addEventListener('dblclick',this.handleTodoCardDblClickEvent.bind(this))
           
        },
        active : ($el) => { 
            $el.className = "active"
            this.renderInputCard()
            this.renderButton()
            //
     
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

        this.$main = document.querySelector('todo-main')

       // this.destroy()
       //this.copy()
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'state') this.updateState(newValue) 
        if(name === 'x' ) this.updateXPositon(newValue)
        if(name === 'y')  this.updateYPositon(newValue)
    }
    updateXPositon(newX){
    
        this.style.left = `${newX}px`;
    }

    updateYPositon(newY){
        this.style.top = `${newY}px`;
    }

    updateState(state){ 
        const todoStateMapper = this.todoStateMapper;
        if( todoStateMapper.hasOwnProperty(state)){
            todoStateMapper[state](this)
        }
    }

    handleCencelButtonClickEvent(){
        this.setAttribute('state','default')
    }

    // handleTodoCardDblClickEvent(){
    //     this.setAttribute('state','active')
    // }
   

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
        const $todoCardRegisterButton = document.createElement('button')

        $todoCardCencelButton.className = 'todo-card-cencel-button'
        $todoCardRegisterButton.className = 'todo-card-register-button'

        $todoCardCencelButton.innerHTML = '취소'
        $todoCardRegisterButton.innerHTML = '등록'
  
        $todoCardCencelButton.addEventListener('click', this.handleCencelButtonClickEvent.bind(this))

        $todoCardBottom.appendChild($todoCardCencelButton)
        $todoCardBottom.appendChild($todoCardRegisterButton)
 
        this.appendChild($todoCardBottom)

        this.checkRegisterButtonDisabled();
        
    }
    
    renderInputCard(){
        this.innerHTML = ""
        const $todoCardTitleInput = document.createElement('input')
        const $todoCardContentInput = document.createElement('textarea')

        $todoCardTitleInput.setAttribute('placeholder','제목을 입력해주세요')
        $todoCardContentInput .setAttribute('placeholder','내용을 입력해주세요')

        $todoCardTitleInput.className = "todo-card-title-input todo-card-title"
        $todoCardContentInput.className = 'todo-card-content-input todo-card-content'
     
        $todoCardTitleInput.addEventListener('input',this.checkRegisterButtonDisabled)
        $todoCardContentInput.addEventListener('keyup',this.checkRegisterButtonDisabled)

        this.appendChild($todoCardTitleInput)
        this.appendChild($todoCardContentInput)
     
    }

    checkRegisterButtonDisabled(){
        const $todoCardTitle = document.querySelector('.todo-card-title-input')
        const $todoCardContent = document.querySelector('.todo-card-content-input')
        const $todoCardRegisterButton = document.querySelector('.todo-card-register-button')

        if($todoCardTitle.value.length > 0 && $todoCardContent.value.length > 0){
            $todoCardRegisterButton.disabled = false
        }else{
            $todoCardRegisterButton.disabled  = true
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
    destroy(){ 
        this.$main.handleDestroy(this)
    }

    handleDefaultCardClickEvent(e){

        this.copy(e)
    }
    copy(e){

        const x = this.offsetLeft
        const y = this.offsetTop

        const width = this.clientWidth;
        const height = this.clientHeight
        const title = this.getAttribute('title')
        const content = this.getAttribute('content')
        const $newTodoCard = document.createElement('todo-card')
 
        $newTodoCard.setAttribute('state','drag')
        $newTodoCard.setAttribute('title',title)
        $newTodoCard.setAttribute('content',content)
        $newTodoCard.setAttribute('x', x )
        $newTodoCard.setAttribute('y', y)

        $newTodoCard.style.width  = `${width}px`;
        $newTodoCard.style.height = `${height}px`;

        this.$main.handleAppendChild(  $newTodoCard , this )

  
    }

}

import { getTodoContainer } from "./util";
import { postTodoCard, deleteTodoCard, updateTodoCard } from "../api/todoCard";


export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state', 'x', 'y']; }

    todoStateMapper = {
        default : ($el) => { 
            $el.className = "default"
            $el.render()
            $el.renderDeleteIcon();
            $el.addEventListener('pointerdown', this.handleDefaultCardPointerDownEvent.bind(this))
            $el.addEventListener('pointerup', this.handleDefaultCardPointerUpEvent.bind(this))
            $el.addEventListener('dblclick',this.handleTodoCardDblClickEvent.bind(this))
            $el.addEventListener('mouseout',this.handleTodoCardMouseOutEvent.bind(this))
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
        this.$section = this.parentElement
        this.$main = document.querySelector('todo-main')
        this.downTriger = false
        this.$todoContainer = getTodoContainer(this); 

        this.computeTodoCardCount();

    }
    disconnectedCallback() {
        
        this.computeTodoCardCount();
    
    }

    computeTodoCardCount(){
        const $todoCount = this.$section.querySelector('todo-section-header-count')
        const count = this.$section.querySelectorAll('todo-card').length
        $todoCount.textContent = count;
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

    handleCencelButtonClickEvent(e){
        if(this.hasAttribute('todoCardId')){
            this.setAttribute('state','default')
        }else{
            this.$section.removeChild(this)
        }
        e.preventDefault();
    }

    handleTodoCardDblClickEvent(){
        this.setAttribute('state','active')
    }
   

    render(){
        this.innerHTML = ""
        const $todoCardTitle = document.createElement('todo-card-title')
        const $todoCardContent = document.createElement('todo-card-content')

        $todoCardTitle.className = 'todo-card-title'
        $todoCardContent.className = 'todo-card-content'

        $todoCardTitle.innerHTML = this.getAttribute('title') ? this.getAttribute('title') : ''
        $todoCardContent.innerHTML = this.getAttribute('content') ? this.getAttribute('content') : ''
 
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
        const todoCardId = this.getAttribute('todoCardId')
        if(todoCardId){
            $todoCardRegisterButton.innerHTML = '수정'
        }else{
            $todoCardRegisterButton.innerHTML = '등록'
        }
  
        $todoCardCencelButton.addEventListener('click', this.handleCencelButtonClickEvent.bind(this))
        $todoCardRegisterButton.addEventListener('click', this.handleRegisterButtonClickEvent.bind(this))

        $todoCardBottom.appendChild($todoCardCencelButton)
        $todoCardBottom.appendChild($todoCardRegisterButton)
 
        this.appendChild($todoCardBottom)

        this.checkRegisterButtonDisabled();
        
    }
    handleRegisterButtonClickEvent(){

        const titleValue = this.querySelector('.todo-card-title-input').value
        const contentValue = this.querySelector('.todo-card-content-input').value
        const todoSectionId  = parseInt(this.$section.getAttribute('sectionId'))
        //코드 분리 할꺼에요!!
        let todoCardId = this.getAttribute('todoCardId')
        if(todoCardId){
            updateTodoCard( parseInt(todoCardId),{ title:titleValue, contents:contentValue }).then((result)=>{
                if(result.affectedRows != 1 )return;
                this.setAttribute('title', titleValue)
                this.setAttribute('content' ,contentValue)
                this.setAttribute('state','default')
            })
        }else{
          postTodoCard(titleValue,contentValue , todoSectionId ).then( (result) => {
              if(result.affectedRows != 1 )return;
              this.setAttribute('title', titleValue)
              this.setAttribute('content' ,contentValue)
              this.setAttribute('state','default')
              this.setAttribute('id',result.insertId)
              this.setAttribute('todoCardId',result.insertId)
          })
        }
            
    }

    renderInputCard(){
        this.innerHTML = ""
        const $todoCardTitleInput = document.createElement('input')
        const $todoCardContentInput = document.createElement('textarea')

        $todoCardTitleInput.setAttribute('placeholder','제목을 입력해주세요')
        $todoCardContentInput .setAttribute('placeholder','내용을 입력해주세요')

        $todoCardTitleInput.value = this.getAttribute('title') 
        $todoCardContentInput.value = this.getAttribute('content') 

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
        $todoCardDeleteIcon.addEventListener('click',this.handleDeleteIconClickEvent.bind(this))
        this.appendChild($todoCardDeleteIcon)
    }
   
    handleDeleteIconClickEvent(){
        const id = this.getAttribute('todoCardId')
        deleteTodoCard(id).then((result)=>{
            if(result.affectedRows === 0) return;
            this.$section.removeChild(this)
        })
        
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

    handleDefaultCardPointerDownEvent(e){
        this.downTriger = true
        setTimeout( ()=> {
            if(this.downTriger) {
                this.copy(e)
                this.$todoContainer.setFrom(this);
            }
        },250);
    }
    handleTodoCardMouseOutEvent(e){
        this.downTriger = false
    }
    handleDefaultCardPointerUpEvent(e){
        this.downTriger = false;
    }
    copy(){
        const $newTodoCard = this.copySelf();
        this.$main.handleAppendChild(  $newTodoCard , this )
    }

    copySelf() {
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
        return $newTodoCard;
    }

}

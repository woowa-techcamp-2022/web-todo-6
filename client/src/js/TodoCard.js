import { getTodoContainer } from "./util";
import { requestPostTodoCard, requestDeleteTodoCard, requestUpdateTodoCard } from "../api/todoCard";
import { TodoSection } from './TodoSection'


export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state', 'x', 'y']; }

    /**
     * @param {string} title
     * @param {string} content 
     * @param {string} state
     * @param {string} id
     */
    constructor(state, title, content ,id) {
        super();

        this.setAttribute('content', content);
        this.setAttribute('title', title);
        this.setAttribute('state', state)
        this.setAttribute('id', id)
        this.setAttribute('todoCardId', id)
    }

    todoStateMapper = {
        default : ($el) => { 
            $el.className = "default"
            $el.render()
            $el.renderDeleteIcon();
            $el.addEventListener('pointerdown', this.handleDefaultCardPointerDownEvent.bind(this))
            $el.addEventListener('pointerup', this.stopPointerDownEvent.bind(this))
            $el.addEventListener('dblclick', this.handleDefaultCardDblclickEvent.bind(this) )//this.setTodoCardAttributes.bind(this,{state:'active'}))
            $el.addEventListener('pointerout', this.stopPointerDownEvent.bind(this,'default'))
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
        },
        delete : ($el) => {
            $el.className = "delete"
        }
    }
  
    handleDefaultCardDblclickEvent(){
        this.stopPointerDownEvent();
        this.setTodoCardAttributes({state:'active'})
    }

    connectedCallback(){
        const state = this.getAttribute('state')
        this.updateState(state)
        this.$section = this.parentElement
        this.$main = document.querySelector('todo-main')
        this.down= false
        this.$todoContainer = getTodoContainer(this); 
        this.computeTodoCardCount();

    }

    disconnectedCallback() {
        this.computeTodoCardCount();
    }

    computeTodoCardCount(){
        if(!(this.$section instanceof TodoSection)) return;
        const $todoCount = this.$section.querySelector('todo-section-header-count')
        const count = this.$section.querySelectorAll('todo-card').length
        $todoCount.textContent = count;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'state') this.updateState(newValue) 
        else if(name === 'x' ) this.updateXPositon(newValue)
        else if(name === 'y')  this.updateYPositon(newValue)
    }
    
    updateXPositon(newX){
        if(!newX)return;
        this.style.left = `${newX}px`;
    }

    updateYPositon(newY){
        if(!newY)return;
        this.style.top = `${newY}px`;
    }

    updateState(state){ 
        const todoStateMapper = this.todoStateMapper;
        if( todoStateMapper.hasOwnProperty(state)){
            todoStateMapper[state](this)
        }
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
        const todoCardId = this.getAttribute('id')
        if(!todoCardId){
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

        const title = this.querySelector('.todo-card-title-input').value
        const content = this.querySelector('.todo-card-content-input').value
        const todoSectionId  = parseInt(this.$section.getAttribute('sectionId'))
        const todoCardId = parseInt(this.getAttribute('todoCardId'))

        if(todoCardId){
            requestUpdateTodoCard( todoCardId, { title ,contents : content } ).then((result)=>{
         
                if(result.affectedRows != 1 )return;
                const nextAttribute = { title , content , state:'default' }
                this.setTodoCardAttributes(nextAttribute)
            })
        }else{
            requestPostTodoCard(title, content , todoSectionId ).then( (result) => {
              if(result.affectedRows != 1 )return;
              const id = result.insertId 
              const nextAttribute = { title,  content , id, todoCardId: id, state: 'default'} 
              this.setTodoCardAttributes(nextAttribute)
 
          })
        }
            
    }
    
    handleCencelButtonClickEvent(e){
        if(!this.getAttribute('todoCardId')) return;
        this.setTodoCardAttributes({state:'default'})
        this.$section.removeChild(this)
        
    }
   

    setTodoCardAttributes(nextAttribute){
        if(!nextAttribute) return;
        const nextAttributeKeys = Object.getOwnPropertyNames(nextAttribute);
        nextAttributeKeys.forEach((key)=>{
            if(!key) return;
            this.setAttribute(key, nextAttribute[key])
        }) 
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
     
        $todoCardTitleInput.addEventListener('input',this.checkRegisterButtonDisabled.bind(this))
        $todoCardContentInput.addEventListener('keyup',this.checkRegisterButtonDisabled.bind(this))

        this.appendChild($todoCardTitleInput)
        this.appendChild($todoCardContentInput)
        
    }

    checkRegisterButtonDisabled(){
        const $todoCardTitle = this.querySelector('.todo-card-title-input')
        const $todoCardContent = this.querySelector('.todo-card-content-input')
        const $todoCardRegisterButton = this.querySelector('.todo-card-register-button')

        if($todoCardTitle.value.length > 0 && $todoCardContent.value.length > 0){
            $todoCardRegisterButton.disabled = false
        }else{
            $todoCardRegisterButton.disabled  = true
        }
    }

    renderDeleteIcon(){
        const $todoCardDeleteIcon = document.createElement('todo-card-delete-icon')
        $todoCardDeleteIcon.innerHTML= "X"

        $todoCardDeleteIcon.addEventListener('pointerover',this.setClassName.bind(this,'delete'))
        $todoCardDeleteIcon.addEventListener('pointerout',this.setClassName.bind(this,'default'))
        $todoCardDeleteIcon.addEventListener('click',this.handleDeleteIconClickEvent.bind(this))
        this.appendChild($todoCardDeleteIcon)
    }
   
    handleDeleteIconClickEvent(){
        const id = this.getAttribute('todoCardId')
        requestDeleteTodoCard(id).then((result)=>{
            if(result.affectedRows === 0) return;
            this.$section.removeChild(this)
        })
        
    }
    setClassName(newClassName){
        this.className = newClassName
    }
    destroy(){ 
        this.$main.handleDestroy(this)
    }

    handleDefaultCardPointerDownEvent(e){
        this.down = true
        setTimeout( ()=> {
            if(!this.down) return;
            const $newTodoCard = this.copySelf();
            this.$main.handleAppendChild(  $newTodoCard , this )
            this.$todoContainer.setFrom(this);
        },250);
    }
    
    stopPointerDownEvent(e){
        this.down = false
    }

    copySelf() {

        const x = this.offsetLeft
        const y = this.offsetTop
        const width = this.clientWidth;
        const height = this.clientHeight;
        const title = this.getAttribute('title')
        const content = this.getAttribute('content')
    
        const $newTodoCard = new TodoCard( 'drag', title, content)

        $newTodoCard.setAttribute( 'x', x )
        $newTodoCard.setAttribute( 'y', y )

        $newTodoCard.style.width  = `${width}px`
        $newTodoCard.style.height = `${height}px`

        return $newTodoCard;
    }

}

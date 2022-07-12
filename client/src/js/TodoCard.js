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
        //this.render();
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
        const $title = document.createElement('h2')
        const $content = document.createElement('div')

        $title.innerHTML = this.getAttribute('title') 
        $title.className = "title"
        $content.innerHTML = this.getAttribute('content')
        $content.className = "content"

        this.appendChild($title)
        this.appendChild($content)

    }

    renderButton(){
        const $bottom = document.createElement('div')
        $bottom.className  = 'bottom'
        const $cencelButton = document.createElement('button')
        $cencelButton.innerHTML = '취소'
        $cencelButton.className = 'cencel-button'
        const $accentButton = document.createElement('button')
        $accentButton.innerHTML = '등록'
        $accentButton.className = 'accent-button'

        $bottom.appendChild($cencelButton)
        $bottom.appendChild($accentButton)
        this.appendChild($bottom)
    }

    renderInputCard(){
        this.innerHTML = ""
        const $titleInput = document.createElement('input')
        $titleInput.setAttribute('placeholder','제목을 입력해주세요')
        $titleInput.className = "title"
        const $contentInput = document.createElement('textarea')
        $contentInput.className = 'content-input content'
        $contentInput.setAttribute('placeholder','내용을 입력해주세요')
    
        this.appendChild($titleInput)
        this.appendChild($contentInput)
     
    }
}

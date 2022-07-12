export class TodoCard extends HTMLElement{

    static get observedAttributes() { return ['state']; }

    map = {
        normal : ($el) => { 
            $el.className = "normal"
        },
        create : ($el) => { 
            $el.className = "create"
        },
        remains : ($el) => {
            $el.className = "remains"
        },
        focus : ($el) => { 
            $el.className = "focus"
        },
        update : ($el) => { 
            $el.className = "update"
        },
        delete : ($el) => {
            $el.className = "delete"
        }
    }
  

    connectedCallback(){
        this.render();
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
        /* 이부분 제외, requst 해서 태그를 넘기는 걸로 하자  */
        const $title = document.createElement('h3')
        const $content = document.createElement('div')
        const $author = document.createElement('span')

        $title.innerHTML = this.getAttribute('title')
        $title.className = "todo-card-title"
        $content.innerHTML = this.getAttribute('content')
        $content.className = "todo-card-content"
        $author.innerHTML = this.getAttribute('author')
        $author.className = "todo-card-author"

        this.appendChild($title)
        this.appendChild($content)
        this.appendChild($author)

    }
}

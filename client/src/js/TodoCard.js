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
}
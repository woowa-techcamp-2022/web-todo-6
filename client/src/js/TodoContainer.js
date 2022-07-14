export class TodoContainer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.moveFrom = null;
        this.moveTo = null;
    }

    setFrom($el) {
        this.moveFrom = $el;
    }

    setTo($el) {
        this.moveTo = $el;
    }

    getFrom() {
        return this.moveFrom
    }

    getTo() {
        return this.moveTo
    }

    move() {
        console.log(this.moveFrom, this.moveTo)
    }
    
}
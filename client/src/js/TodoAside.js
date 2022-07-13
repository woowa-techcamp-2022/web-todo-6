class TodoAside extends HTMLElement{
    constructor(){
        super();
    } 

    connectedCallback(){
        this.connectWithTodoHeaderMenu();
        window.addEventListener('click', this.handleBackgroundTouchEvent.bind(this))
    }
    connectWithTodoHeaderMenu(){
        const $todoHeaderMenu = document.querySelector('todo-header-menu');
        $todoHeaderMenu.connectWithTodoAside(this);
        this.$todoHeaderMenu = $todoHeaderMenu;
    }

    handleBackgroundTouchEvent(evt) {
        const backgroundClicked = this.contains(evt.target) === false && this.$todoHeaderMenu.contains(evt.target) === false;
        if(backgroundClicked) {
            this.close()
        } 
    }

    open(){
        this.style.right = '0%';
    }
    close(){
        this.style.right = '-100%';
    }
}

class TodoAsideCloseIcon extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.addEventListener('click',this.onClick);
    }
    onClick(){
        const $todoAside = document.querySelector('todo-aside');
        $todoAside.close();
    }
}

class TodoLog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.mountChildElements()
    }

    mountChildElements() {
        const contents = this.getAttribute('contents')
        const action = this.getAttribute('action')
        const target = this.getAttribute('target')
        const timestamp = this.getAttribute('timestamp')

        const $todoLogIconBox = document.createElement('todo-log-icon-box')
        const $todoLogIcon = document.createElement('todo-log-icon')
        $todoLogIcon.textContent = '🥳'
        $todoLogIconBox.appendChild($todoLogIcon)
        
        const $todoLogBox = document.createElement('todo-log-box')
        const $todoLogMessage = document.createElement('todo-log-message')
        $todoLogMessage.innerHTML = this.parseContents(target, action, contents)
        const $todoLogTime = document.createElement('todo-log-time')
        $todoLogTime.textContent = this.parseTimestamp(+timestamp);
        $todoLogBox.appendChild($todoLogMessage)
        $todoLogBox.appendChild($todoLogTime)

        this.appendChild($todoLogIconBox)
        this.appendChild($todoLogBox)
    }

    parseContents(target, action, contents) {
        return `<span class="point">${target}</span>에 <span class="point">${contents}</span>을(를) <span class="point">${action}</span>하였습니다.`
    }

    parseTimestamp(timestamp) {
        const current= new Date();
        const diff = current - timestamp;
        const ONE_HOUR = 1000 * 60 * 60;

        if(current - timestamp < ONE_HOUR) {
            return `${Math.floor(diff/1000/60)}분 전`
        }

        const dt = new Date(timestamp);

        return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()}`;
    }
}


export { TodoAside, TodoAsideCloseIcon, TodoLog }
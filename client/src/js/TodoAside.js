import { getTodoLogs } from "../api/todoLog";

class TodoAside extends HTMLElement{
    constructor(){
        super();
    } 

    connectedCallback(){
        this.connectWithTodoHeaderMenu();
        window.addEventListener('pointerdown', this.handleBackgroundTouchEvent.bind(this))
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
        getTodoLogs().then(newLogs => {
            const oldLogs = Array.from(this.children).filter(item => item.tagName === 'TODO-LOG')
            oldLogs.forEach(log => this.removeChild(log));
            newLogs.forEach(log => this.appendChild(new TodoLog(log.todoTitle, log.action, log.todoSection, new Date(log.timestamp).valueOf())))

        })
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
    /**
     * 
     * @param {string} contents 
     * @param {string} action 
     * @param {string} target 
     * @param {string} timestamp 
     */
    constructor(contents, action, target, timestamp) {
        super();
        this.setAttribute('contents', contents);
        this.setAttribute('action', action);
        this.setAttribute('target', target);
        this.setAttribute('timestamp', timestamp)
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
        $todoLogIcon.textContent = '????'
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
        return `<span class="point">${target}</span>??? <span class="point">${contents}</span>???(???) <span class="point">${action}</span>???????????????.`
    }

    parseTimestamp(timestamp) {
        const current= new Date();
        const OFFSET = 1000 * 60 * 60 * 9
        timestamp += OFFSET;
        const diff = current - timestamp;
        const ONE_HOUR = 1000 * 60 * 60;
        const ONE_MINUTE = 1000 * 60;
        
        
        if(current - timestamp < ONE_MINUTE) {
            return '?????? ???'
        }

        if(current - timestamp < ONE_HOUR) {
            return `${Math.floor(diff/1000/60)}??? ???`
        }

        const dt = new Date(timestamp);

        return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()}`;
    }
}


export { TodoAside, TodoAsideCloseIcon, TodoLog }
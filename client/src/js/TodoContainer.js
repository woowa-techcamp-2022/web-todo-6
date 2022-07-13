export class TodoContainer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        // this.addEventListener('mousemove', this.catchTodoSection)
    }

    catchTodoSection(evt) {
        const THROTTLE_TIME = 100;
        const currentTime = new Date().valueOf();
        
        if(this.lastMoveEventTime && (currentTime - this.lastMoveEventTime < THROTTLE_TIME)) {
            return
        }
        this.lastMoveEventTime = currentTime;

        const $currentSection = this.getCurrentSection(evt);
        if($currentSection) {
            if($currentSection !== this.lastActiveSection) {
                $currentSection.handlePointerEnter();
                this.lastActiveSection = $currentSection;
            }
        }
        
        
    }

    getCurrentSection(evt) {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;

        const sections = Array.from(this.children);
        
        for(let i=0; i<sections.length; i++) {
            const section = sections[i];
            const top = section.offsetTop;
            const left = section.offsetLeft;
            const bottom = top + section.offsetHeight;
            const right = left + section.offsetWidth;
            
            const horizonContidion = mouseX <= right && mouseX >= left;
            const verticalCondition = mouseY <= bottom && mouseY >= top;
            if(horizonContidion && verticalCondition)  {
                return section
            }
        }
    }
}
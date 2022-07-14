/**
 * @param {HTMLElement} $el 
 * 
 * @return {HTMLElement}
 */
function getTodoContainer($el) {
    while($el.tagName !== 'TODO-MAIN') {
        if($el.tagName === 'TODO-CONTAINER') {
            return $el
        }

        $el = $el.parentElement;
    }    
}

/**
 * @param {HTMLElement} $el 
 */
function getTodoSection($el) {
    while($el.tagName !== 'TODO-MAIN') {
        if($el.tagName === 'TODO-SECTION') {
            return $el
        }

        $el = $el.parentElement;
    }   
}

/**
 * @param {HTMLElement} newNode 
 * @param {HTMLElement} existingNode 
 */
function insertAfter(newNode, existingNode) {
    if(existingNode.nextSibling) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    } else {
        existingNode.parentNode.appendChild(newNode)
    }
}

export { getTodoContainer, getTodoSection, insertAfter }
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

export { getTodoContainer }
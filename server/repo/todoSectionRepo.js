const { query }= require('../db')

function getTodoSections() {
    return query(`
        SELECT 
                * 
        FROM 
            TodoSection 
        ORDER BY id ASC
    `)
}
function updateTodoSection(id, todoCardIds, title) {
    if( !id || ( !todoCardIds && !title )) return;
    return query(`
    UPDATE
        TodoSection
    SET
        ${todoCardIds ? `todoCardIds = ${todoCardIds}` : ''} 
        ${ title ? `title = ${title}` : ''}
    }    
    WHERE
        id = ${id}
    `)
}

module.exports = {
    getTodoSections,
    updateTodoSection
}
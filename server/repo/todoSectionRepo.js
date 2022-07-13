const query = require('../db')

function getTodoSections() {
    return query(`
    SELECT 
            * 
    FROM 
        TodoSection 
    ORDER BY id ASC
    `)
}
function updateTodoSectionsOrder(id, todoCardIds) {
    return query(`
    UPDATE
        TodoSection
    SET
        todoIds = '${todoCardIds}'
    WHERE
        id = ${id}
    `)
}

module.exports = {
    getTodoSections,
    updateTodoSectionsOrder
}
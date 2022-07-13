const query = require('../db')

function getTodoSections() {
    return query(`
    SELECT 
        idx,
        title,
        todos
    FROM
        TodoSection
    ORDER BY idx ASC
    `)
}

function updateTodoSectionsOrder(idx, todos) {
    return query(`
    UPDATE
        TodoSection
    SET
        todos = '${todos}'
    WHERE
        idx = ${idx}
    `)
}


module.exports = {
    getTodoSections,
    updateTodoSectionsOrder
}
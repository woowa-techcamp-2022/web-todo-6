const { query }= require('../db')

function getTodos(){
    return query(`
        SELECT * FROM TodoCard;
    `)
}
function getTodosByTodoSectionId(todoSectionId){
    return query(`
        SELECT * FROM TodoCard WHERE todoSectionId = ${todoSectionId};
    `)
}

function insertTodo(title, contents, todoSectionId) {
    return query(`
        INSERT INTO 
            TodoCard(title, contents, todoSectionId)
        VALUES
            ("${title}", "${contents}", ${parseInt(todoSectionId)});
    `)
}

function updateTodo( id ,title, contents , todoSectionId) {
    if( !id || ( !todoCardIds && !title && !todoSectionId)) return;
    return query(`
    UPDATE
        TodoCard
    SET
        ${ title ? `title = "${title}"` : ''} 
        ${ contents ? `contents = "${contents}"` : ''}
        ${ todoSectionId ? `todoSectionId = ${todoSectionId}` : ''}
    }    
    WHERE
        id = ${parseInt(id)}
    `)
}

function deleteTodo(id) {
    if(!id) return;
    return query(`
        DELETE FROM TodoCard WHERE id = ${id};
    `)
}

module.exports = {
    getTodos,
    getTodosByTodoSectionId,
    insertTodo,
    updateTodo,
    deleteTodo
}
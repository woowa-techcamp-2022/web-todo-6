const { query }= require('../db')

function getTodo(){
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

function updateTodo( id , updateData) {
  
    const updateKey = Object.keys(updateData)
    const setTemplate = updateKey.map( (key,index) => { return `${index !== 0 ? ',' : ''} ${key} = "${updateData[key]}"`}).join('')

    return query(`
    UPDATE
        TodoCard
    SET
        ${setTemplate} 
    WHERE
        id = ${parseInt(id)}
    `)
}

function deleteTodo(id) {
    return query(`
        DELETE FROM TodoCard WHERE id = ${parseInt(id)};
    `)
}

module.exports = {
    getTodo,
    getTodosByTodoSectionId,
    insertTodo,
    updateTodo,
    deleteTodo
}
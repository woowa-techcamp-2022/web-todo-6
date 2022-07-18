const { query }= require('../db')

function getTodo(){
    return query(`
        SELECT * FROM TodoCard  ORDER BY id DESC; 
    `)
}

function getTodoByTodoSectionId(todoSectionId){
    return query(`
        SELECT * FROM TodoCard WHERE todoSectionId = ${todoSectionId} ORDER BY id DESC; 
    `)
}


function getTodoById(id){
    return query(`
    SELECT 
        TodoCard.title as todoTitle ,
        TodoSection.title as sectionTitle
    FROM
        TodoCard 
    LEFT JOIN
        TodoSection
    on TodoCard.todoSectionId = TodoSection.id
    WHERE TodoCard.id=${id} 
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

function updateTodo(id , updateData) {
    const updateKey = Object.keys(updateData)
    const setTemplate = updateKey.filter(key => updateData[key]).map( (key,index) => { return `${index !== 0 ? ',' : ''} ${key} = "${updateData[key]}"`}).join('')

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
    getTodoById,
    getTodoByTodoSectionId,
    insertTodo,
    updateTodo,
    deleteTodo
}
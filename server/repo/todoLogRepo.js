const { query }= require('../db')

function getTodoLogs() {
    return query(`
    SELECT 
        id,
        action,
        todoTitle,
        todoSection,
        timestamp
    FROM 
        TodoLog
    ORDER BY TodoLog.id DESC   
    `)
}


function setTodoLog(action, todoCardId, todoSctionId ){
    return query (`
        INSERT INTO TodoLog(action, todoCardId, todoSectionId) VALUES ("${action}", ${todoCardId}, ${todoSctionId});
    `)

}


module.exports = {
    getTodoLogs,
    setTodoLog
}
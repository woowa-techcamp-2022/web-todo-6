const { query }= require('../db')

function getTodoLogs() {
    return query(`
    SELECT 
        TodoLog.id as id,
        action,
        tds.title as todoSectionTitle,
        tdc.title as todoCardTitle
    FROM 
        TodoLog
    LEFT JOIN 
        (SELECT id, title FROM TodoSection) as tds
         ON tds.id = TodoLog.todoSectionId
    LEFT JOIN 
        (SELECT id, title FROM TodoCard) as tdc
         ON tdc.id = TodoLog.todoCardId
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
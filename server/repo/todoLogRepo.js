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


function setTodoLog(action, todoTitle, todoSction ){
    return query (`
        INSERT INTO TodoLog(action, todoTitle, todoSection) VALUES ("${action}", "${todoTitle}", "${todoSction}");
    `)
}


module.exports = {
    getTodoLogs,
    setTodoLog
}
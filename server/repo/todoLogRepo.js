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


function setTodoLog( logData ){
    const {action, todoTitle, sectionTitle } = logData
    return query (`
        INSERT INTO TodoLog(action, todoTitle, todoSection) VALUES ("${action}", "${todoTitle}", "${sectionTitle }");
    `)
}


module.exports = {
    getTodoLogs,
    setTodoLog
}
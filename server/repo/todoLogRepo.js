const { query }= require('../db')

function getTodoLogs() {
    return query(`
    SELECT * FROM TodoLog
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
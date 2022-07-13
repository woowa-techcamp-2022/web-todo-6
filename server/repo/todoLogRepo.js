const query = require('../db')

function getTodoLogs() {
    return query(`
    SELECT 
        TodoLog.idx as idx,
        action,
        tds.title as TodoSection,
        tdc.title as Todo
    FROM TodoLog
    LEFT JOIN (SELECT idx, title FROM TodoSection) as tds
    ON tds.idx = TodoLog.todoSection
    LEFT JOIN (SELECT idx, title FROM TodoCard) as tdc
    ON tdc.idx = TodoLog.todo
    ORDER BY TodoLog.idx DESC    
    `)
}


module.exports = {
    getTodoLogs
}
const { query }= require('../db')

function getTodoSections() {
    return query(`
        SELECT 
                * 
        FROM 
            TodoSection 
        ORDER BY id ASC
    `)
}
function updateTodoSection(id, updateData) {
    
    const updateKey = Object.keys(updateData)
    const setTemplate = updateKey.map( (key,index) => { return `${index !== 0 ? ',' : ''} ${key} = "${updateData[key]}"`}).join('')

    return query(`
    UPDATE
        TodoSection
    SET
        ${setTemplate} 
    WHERE
        id = ${id}
    `)
}

module.exports = {
    getTodoSections,
    updateTodoSection
}
const { setTodoLog } = require('../repo/todoLogRepo')
const { getTodoById } = require('../repo/todoRepo')

function setLog(req,res){

    const { action, id } = req.logData
    if(action === '삭제'){
        const { todoTitle, sectionTitle } = req.deleteLogData
            setTodoLog(action, todoTitle, sectionTitle).then( () => {
                return res.status(200).json(req.data) 
        })
    }else{
    
    getTodoById(id).then(todo => {
        isArray = Array.isArray(todo)
        if(isArray){
            todo = todo[0]
        }
        const { todoTitle, sectionTitle } = todo
        setTodoLog(action, todoTitle, sectionTitle).then( () => {
            return res.status(200).json(req.data) 
        })
    })
    }
}
module.exports = {
    setLog
}
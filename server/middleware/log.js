const { setTodoLog } = require('../repo/todoLogRepo')

function setLog(logData){
    console.log(logData)
    const {action, todoCardId ,todoSectionId} = logData
    console.log(action)
    setTodoLog(action, todoCardId ,todoSectionId).then(logs => {
        console.log(logs)
        return;
    })

}
module.exports = {
    setLog
}
const { setTodoLog } = require('../repo/todoLogRepo')

function setLog(logData){
    const {action, todoCardId ,todoSectionId} = logData
    setTodoLog(action, todoCardId ,todoSectionId).then(logs => {
        console.log(logs)
        return;
    })

}
module.exports = {
    setLog
}
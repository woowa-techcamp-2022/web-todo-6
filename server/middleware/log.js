const { setTodoLog } = require('../repo/todoLogRepo')
const { getTodoById } = require('../repo/todoRepo')


function createLog(req, res, next){
    let id  =  req.id
    if(!id) id = req.params.id
    if(!id) return ;
    if(req.logData) return next(); //delete 의 경우 로그를 먼저 만들어요
    getTodoById(id).then(todo => {
        const isArray = Array.isArray(todo)
        if(isArray && todo.length > 0){
            todo = todo[0]
        }
        const { todoTitle, sectionTitle } = todo
        let action = ''
        if(req.method === "POST"){
            action = '등록'
        }else if(req.method === "PATCH"){
            action = req.move ? '이동' : '수정'
        }else if(req.method === "DELETE"){
            action = '삭제'
        }
        req.logData = { action , todoTitle, sectionTitle }

        next();
    })
    

}

function setLog(req,res){
    if(!req.logData) return res.status(500).send()
    setTodoLog(req.logData).then( () => {
    return res.status(200).json(req.data) 
})


}
module.exports = {
    createLog,
    setLog
}
const express = require('express')

const router = express.Router();
const { getTodoById, getTodosByTodoSectionId, insertTodo, updateTodo,  deleteTodo, getTodo} = require('../repo/todoRepo')
const {setLog} = require('../middleware/log')

router.post('/', async (req, res, next) => {
    const { title, contents, todoSectionId} = req.body
    insertTodo( title, contents, todoSectionId).then( result => {
        req.data = result;
        req.logData = { action : "생성", id: result.insertId}
        next();
    })
},setLog)

//여기서 sectionID 검색해도 되긴합니다. 
router.patch('/:id', (req, res, next) => {

    const { title, contents , todoSectionId} = req.body;
    const updateData = { title, contents, todoSectionId }
    const { id } = req.params;
    if( !id || ( !title && !contents )) return res.status(500).json({'message':'err'});
    updateTodo( id, updateData ).then( result => {
        req.data = result
        const action = todoSectionId ? '이동' : '수정'
        req.logData = { action : action, id: id}
        next();
    })  
},setLog)


router.patch('/:id/move', (req, res, next) => {
    console.log('ee')
    const { todoSectionId } = req.body;
    const updateData = { todoSectionId }
    const { id } = req.params;
    if( !id || ! todoSectionId ) return res.status(500).json();
    updateTodo( id, updateData ).then( result => {
        req.data = result
        req.logData = { action : "이동", id: id}
        next();
    })
},setLog)

router.get('/', (req, res) => {
    const { todoSectionId } = req.body;
    if(!todoSectionId){
        getTodo().then( todo => {
            return res.status(200).json(todo)
        })
    }else{
        getTodosByTodoSectionId(todoSectionId).then( todo => {
            return res.status(200).json(todo)
        })
    }
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    if(!id) return res.status(500).json();
    getTodoById(id).then( todo => {
        req.deleteLogData = todo[0]
        deleteTodo(id).then( result => {
            req.data = result
        })
        req.logData = { action : "삭제"}
        
        next();
    })

},setLog)

module.exports = router;
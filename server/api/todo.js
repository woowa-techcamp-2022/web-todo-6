const express = require('express')

const router = express.Router();
const { getTodos, getTodosByTodoSectionId, insertTodo, updateTodo,  deleteTodo} = require('../repo/todoRepo')
const {setTodoLog} = require('../repo/todoLogRepo')

router.post('/', async (req, res) => {
    const { title, contents, todoSectionId} = req.body
    insertTodo( title, contents, todoSectionId).then( todo => {
        //const logData = { action: "추가" ,todoCardId : todo.insertId, todoSectionId: todoSectionId}
            setTodoLog("추가",todo.insertId, todoSectionId).then(todo => {
            res.status(200).json(todo)
        })
    })
})


router.patch('/:id', (req, res) => {
    const { title, contents} = req.body;
    const updateData = { title, contents}
    const { id } = req.params;
    if( !id || (  !title && !contents )) return;
    updateTodo( id, updateData ).then( todo => {
        res.status(200).json(todo)
    })
    
})
router.patch('/:id/move', (req, res) => {
    const { todoSectionId } = req.body;
    const updateData = { todoSectionId }
    const { id } = req.params;
    if( !id || ! todoSectionId ) return;
    updateTodo( id, updateData ).then( todo => {
        res.status(200).json(todo)
    })
    
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    deleteTodo(id).then( todo => {
        res.status(200).json(todo)
    })
})


module.exports = router;
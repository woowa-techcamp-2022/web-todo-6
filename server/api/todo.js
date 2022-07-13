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
    const { title, contents, sectionId } = req.body;
    const { id } = req.params;
    updateTodo( id, title, contents, sectionId ).then( todo => {
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
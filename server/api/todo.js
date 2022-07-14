const express = require('express')

const router = express.Router();
const {  getTodosByTodoSectionId, insertTodo, updateTodo,  deleteTodo, getTodo} = require('../repo/todoRepo')
const {setTodoLog} = require('../repo/todoLogRepo')

router.post('/', async (req, res) => {
    const { title, contents, todoSectionId} = req.body
    insertTodo( title, contents, todoSectionId).then( todo => {
        res.status(200).json(todo)
    })
})

//여기서 sectionID 검색해도 되긴합니다. 
router.patch('/:id', (req, res) => {
    const { title, contents, todoSectionId } = req.body;
    const updateData = { title, contents, todoSectionId }
    const { id } = req.params;
    if( !id || ( !title && !contents )) return res.status(500).json({'message':'err'});
    updateTodo( id, updateData ).then( todo => {
        console.log(todo)
        res.status(200).json(todo)
    })
    
})
router.patch('/:id/move', (req, res) => {
    const { todoSectionId } = req.body;
    const updateData = { todoSectionId }
    const { id } = req.params;
    if( !id || ! todoSectionId ) return res.status(500).json();
    updateTodo( id, updateData ).then( todo => {
        res.status(200).json(todo)
    })
    
})

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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if(!id) return res.status(500).json();
  
    deleteTodo(id).then( todo => {
        res.status(200).json(todo)
    })
})

module.exports = router;
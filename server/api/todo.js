const express = require('express')

const router = express.Router();
const { getTodoByTodoSectionId, insertTodo, updateTodo,  deleteTodo, getTodo} = require('../repo/todoRepo')
const { createLog ,setLog} = require('../middleware/log')


router.post('/', async (req, res, next) => {
    const { title, contents, sectionId} = req.body
    insertTodo( title, contents, sectionId).then( result => {
        req.data = result;
        req.id = result.insertId
        next();
    })
})
 
router.patch('/:id', (req, res, next) => {
    const { title, contents , todoSectionId} = req.body;
    const updateData = { title, contents, todoSectionId }
    const { id } = req.params;
    if( !id || ( !title && !contents )) return res.status(500).json({'message':'err'});
    updateTodo( id, updateData ).then( result => {
        req.data = result;
        req.id = id
        req.move =  todoSectionId ? true : false
        next();
    })  
})

router.get('/', (req, res) => {
    const { sectionId } = req.query;
    if(!sectionId){
        getTodo().then( todo => {
            return res.status(200).json(todo)
        })
    }else{
        getTodoByTodoSectionId(sectionId).then( todo => {

            return res.status(200).json(todo)
        })
    }
})

router.delete('/:id', createLog,(req, res, next) => {
    const { id } = req.params;
    if(!id) return res.status(500).json();
    deleteTodo(id).then( result => {
        req.data = result
        req.id = id
        next();
    })
})

router.use(createLog)
router.use(setLog)

module.exports = router;
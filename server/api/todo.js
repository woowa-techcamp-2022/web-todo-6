const express = require('express')

const router = express.Router();
const { insertTodo, updateTodo,  deleteTodo} = require('../repo/todoRepo')
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

//여기서 sectionID 검색해도 되긴합니다. 
router.patch('/:id', (req, res) => {
    const { title, contents, todoSectionId } = req.body;
    const updateData = { title, contents}
    const { id } = req.params;
    if( !id || ( !title && !contents || !todoSectionId )) return res.status(500).json();
    updateTodo( id, updateData ).then( todo => {
        setTodoLog("수정",id, todoSectionId).then(todo => {
            res.status(200).json(todo)
        }).catch(
            res.status(500).json({message:'err'})
        )
        res.status(200).json(todo)
    })
    
})
router.patch('/:id/move', (req, res) => {
    const { todoSectionId } = req.body;
    const updateData = { todoSectionId }
    const { id } = req.params;
    if( !id || ! todoSectionId ) return res.status(500).json();
    updateTodo( id, updateData ).then( todo => {
        setTodoLog("이동", id, todoSectionId).then(todo => {
            res.status(200).json(todo)
        })
    }).catch(
        res.status(500).json({message:'err'})
    )
    
})

router.delete('/:id', (req, res) => {
    const { todoSectionId } = req.body;
    const { id } = req.params;
    if(!id) return res.status(500).json();
  
    deleteTodo(id).then( todo => {
        setTodoLog("삭제", id, todoSectionId).then(todo => {
            res.status(200).json(todo)
        })
    }).catch(
        res.status(500).json({message:'err'})
    )
})

module.exports = router;
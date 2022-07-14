const express = require('express')

const router = express.Router();

const { getTodoSections, updateTodoSection } = require('../repo/todoSectionRepo')

const { getTodosByTodoSectionId } = require('../repo/todoRepo')


router.get('/', (req, res) => {
    getTodoSections().then(sections => {
        res.status(200).json(sections);
    })
})
router.patch('/:id', (req, res) => {
    const { todoCardIds , title} = req.body
    const updateData =  { todoCardIds , title}
    const id = req.params.id
    if( !id || ( !todoCardIds && !title )) return;
    updateTodoSection(id,updateData).then( (todoSection) => {
        res.status(200).json(todoSection);
    })
})


module.exports = router;
const express = require('express')

const router = express.Router();

const { getTodoSections, updateTodoSection } = require('../repo/todoSectionRepo')

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
    updateTodoSection(id,updateData).then( () => {
        res.status(200).json({message:'ok'});
    })
})


module.exports = router;
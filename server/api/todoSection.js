const express = require('express')

const router = express.Router();

const { getTodoSections, updateTodoSection } = require('../repo/todoSectionRepo')

router.get('/', (req, res) => {
    getTodoSections().then(sections => {
        res.status(200).json(sections);
    })
})
router.patch('/:id', (req, res) => {
    const { todoIds , title} = req.body
    const id = req.params.id
    updateTodoSection(id,todoIds,title).then( () => {
        res.status(200).json({message:'ok'});
    })
})


module.exports = router;
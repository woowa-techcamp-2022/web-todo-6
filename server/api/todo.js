const express = require('express')

const router = express.Router();



router.post('/', (req, res) => {
    const section = req.body.section;
    const title = req.body.title;
    const contents = req.body.contents;

    
})

router.put('/:idx', (req, res) => {

})

router.delete('/:idx', (req, res) => {

})

router.put('/:idx/move', (req, res) => {

})


module.exports = router;
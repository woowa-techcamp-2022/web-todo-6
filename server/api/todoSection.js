const express = require('express')

const router = express.Router();

const { getTodoSections } = require('../repo/todoSectionRepo')

router.get('/', (req, res) => {
    getTodoSections().then(sections => {
        res.status(200).type('json').send(JSON.stringify({
            sections
        }));
    })
})

module.exports = router;
const express = require('express')

const router = express.Router();
const { getTodoLogs } = require('../repo/todoLogRepo')


router.get('/', (req, res) => {
    getTodoLogs().then(logs => {
        res.status(200).type('json').send(JSON.stringify({
            logs
        }))
    })
});

module.exports = router;
const express = require('express')

const router = express.Router();
const { getTodoLogs ,setTodoLog } = require('../repo/todoLogRepo')


router.get('/', (req, res) => {
    getTodoLogs().then(logs => {
        res.status(200).json(logs);
    })
});
router.post('/', (req, res) => {
    const { action, todoTitle, todoSection }  = req.body
    setTodoLog(action, todoTitle, todoSection).then(logs => {
        res.status(200).json(logs);
    })
});

module.exports = router;
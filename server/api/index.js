const express = require('express')
const router = express.Router();

const todoSectionRouter = require('./todoSection');
const todoRouter = require('./todo');
const todoLogRouter = require('./todoLog');

router.use('todo-section', todoSectionRouter);
router.use('todo', todoRouter);
router.use('todo-log', todoLogRouter);

module.exports = router;

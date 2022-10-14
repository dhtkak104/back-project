 const express = require('express');
 const router = express.Router();

 const controller = require('./boardsController');

 router.get('/', controller.data.selectBoards);
 router.post('/', controller.data.insertBoards);

 module.exports = router;

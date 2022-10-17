 const express = require('express');
 const router = express.Router();

 const controller = require('./routes/boardsController');

 router.get('/boards', controller.data.selectBoards);
 router.post('/boards', controller.data.insertBoard);
 router.get('/boards/:board_no', controller.data.selectBoard);
 router.put('/boards/:board_no', controller.data.updateBoard);
 router.delete('/boards/:board_no', controller.data.deleteBoard);

 module.exports = router;

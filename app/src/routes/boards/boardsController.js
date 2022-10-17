const logger = require('../../config/logger');
const Board = require('../../models/Board');

const data = {
  selectBoards: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.getBoards();
    return res.json(response);
  },

  insertBoards: (req, res) => {
    const board = new Board(req.body);
    const response = board.insertBoard();
    if (response.err) {
      logger.error(
        `GET /selectBoards 200 Response: "success: ${response.success}, ${response.err}"`
      );
    } else {
      logger.info(
        `GET /selectBoards 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }
    return res.json(response);
  },
};

module.exports = {
  data,
}

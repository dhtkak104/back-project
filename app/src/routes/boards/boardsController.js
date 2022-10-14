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
    return res.json(response);
  },
};

module.exports = {
  data,
}

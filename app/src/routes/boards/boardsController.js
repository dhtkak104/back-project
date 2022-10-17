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
    const url = {
      method: 'POST',
      path: '/insertBoard',
      status: response.err ? 400 : 201
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = {
  data,
}

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
    );
  }  
}

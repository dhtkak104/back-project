const logger = require('../../config/logger');
const BoardsService = require('../../service/boardsService');

const data = {
  selectBoards: async (req, res) => {
    const response = await new BoardsService().getBoards();
    log({method:req.method, path:'selectBoards', status:response.status});
    return res.status(response.status).json(response);
  },

  insertBoard: async (req, res) => {
    const response = await new BoardsService().insertBoard(req.body);
    log({method:req.method, path:'insertBoard', status:response.status});
    return res.status(response.status).json(response);
  },

  selectBoard: async (req, res) => {
    const response = await new BoardsService().getBoard(req.params);
    log({method:req.method, path:'selectBoard', status:response.status});
    return res.status(response.status).json(response);
  },
  updateBoard: async (req, res) => {
    const response = await new BoardsService().updateBoard(req.body);
    log({method:req.method, path:'selectBoard', status:response.status});
    return res.status(response.status).json(response);
  },

  deleteBoard: async (req, res) => {
    const response = await new BoardsService().deleteBoard(req.params);
    log({method:req.method, path:'selectBoard', status:response.status});
    return res.status(response.status).json(response);
  },
};

module.exports = {
  data,
}

const log = (param) => {
  const logMsg = `${param.method} ${param.path} ${param.status}`;
  if (200 <= param.status < 300) {
    logger.info(logMsg);
  } else {
    logger.error(logMsg);
  }
}

/* 
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
*/
const BoardsModel = require('../models/boardsModel');

class BoardService {
  constructor() {}

  async getBoards() {
    const result = {status:200, msg:'', data:{}};
    result.data = await BoardsModel.getBoards();
    return result;
  }

  async insertBoard(param) {
    const result = {status:200, msg:'', data:{}};
    await BoardsModel.insertBoard(param);
    return result;
  }

  async getBoard(param) {
    const result = {status:200, msg:'', data:{}};
    result.data = await BoardsModel.getBoard(param);
    return result;
  }

  async updateBoard(param) {
    const result = {status:200, msg:'', data:{}};
    await BoardsModel.updateBoard(param);
    return result;
  }

  async deleteBoard(param) {
    const result = {status:200, msg:'', data:{}};
    await BoardsModel.deleteBoard(param);
    return result;
  }
}

module.exports = BoardService;
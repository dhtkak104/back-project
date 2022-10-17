const BoardStorage = require('./BoardStorage');

class Board {
  constructor(body) {
    this.body = body;
  }

  async getBoards() {
    const client = this.body;
    try {
      const board = await BoardStorage.getBoards();
      if (board) {
        return { success:true };
      } else {
        return { success:false, msg: '존재하지 않는 데이터입니다.' };
      }
    }
    catch (err) {
      return { success:false, err };
    }
  }

  async insertBoard() {
    const client = this.body;
    try {
      const response = await BoardStorage.insertBoard(client);
      return response;
    } 
    catch (err) {
      return { success:false, err };
    }
  }

}

module.exports = Board;
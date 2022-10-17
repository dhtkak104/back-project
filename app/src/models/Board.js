const BoardStorage = require('./BoardStorage');

class Board {
  constructor(body) {
    this.body = body;
  }

  async getBoards() {
    try {
      const board = await BoardStorage.getBoards();
      if (board) {
        return { success:true, data:board, status:200 };
      } else {
        return { success:false, msg: '존재하지 않는 데이터입니다.' };
      }
    }
    catch (err) {
      return { success:false, err };
    }
  }

  async insertBoard(board) {
    const client = this.body;
    try {
      const response = await BoardStorage.insertBoard(client);
      return response;
    } 
    catch (err) {
      return { success:false, err };
    }
  }

  async getBoard() {
    try {
      const board = await BoardStorage.getBoards();
      if (board) {
        return { success:true, data:board, status:200 };
      } else {
        return { success:false, msg: '존재하지 않는 데이터입니다.' };
      }
    }
    catch (err) {
      return { success:false, err };
    }
  }

  async updateBoard() {
    try {
      const board = await BoardStorage.getBoards();
      if (board) {
        return { success:true, data:board, status:200 };
      } else {
        return { success:false, msg: '존재하지 않는 데이터입니다.' };
      }
    }
    catch (err) {
      return { success:false, err };
    }
  }

  async deleteBoard() {
    try {
      const board = await BoardStorage.getBoards();
      if (board) {
        return { success:true, data:board, status:200 };
      } else {
        return { success:false, msg: '존재하지 않는 데이터입니다.' };
      }
    }
    catch (err) {
      return { success:false, err };
    }
  }
}

module.exports = Board;
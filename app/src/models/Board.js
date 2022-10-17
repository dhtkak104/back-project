const BoardStorage = require('./BoardStorage');

class Board {
  constructor(body) {
    this.body = body;
  }

  async getBoards() {
    const client = this.body;
    return await BoardStorage.getBoards();
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
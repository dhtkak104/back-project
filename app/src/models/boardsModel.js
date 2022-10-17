const db = require('../config/db');

class BoardsModel {
  static getBoards() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_boards;';
      db.query(query, (err, data) => {
        if(err) reject(`${err}`);
        else    resolve(data.rows);
      });
    }); 
  };

  static insertBoard(board) {
    console.log(board);
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO demo.t_boards (title, contents) VALUES ($1, $2);'
      db.query(query, [board.title, board.contents], (err) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };

  static getBoard(board) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_boards WHERE board_no = $1;'
      db.query(query, [board.board_no], (err, data) => {
        if(err) reject(`${err}`);
        else    resolve(data.rows[0]);
      });
    }); 
  };

  static updateBoard(board) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE demo.t_boards SET title = $1, contents = $2 WHERE board_no = $3;'
      db.query(query, [board.title, board.contents, board.board_no], (err, data) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };

  static deleteBoard(board) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM demo.t_boards WHERE board_no = $1;'
      db.query(query, [board.board_no], (err, data) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };
}

module.exports = BoardsModel;
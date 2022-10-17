const db = require('../config/db');

class BoardStrorage {
  static getBoards(...fields) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_bbs;';
      db.query(query, (err, data) => {
        if(err) reject(`${err}`);
        else    resolve(data.rows);
      });
    }); 
  };

  static getBoard(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_bbs WHERE bbs_no = ?;'
      db.query(query, [id], (err, data) => {
        if(err) reject(`${err}`);
        else    resolve(data.rows[0]);
      });
    }); 
  };

  static insertBoard(board) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO demo.t_bbs (bbs_title, bbs_contents) VALUES (?, ?);'
      db.query(query, [board.bbs_title, board.bbs_contents], (err) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };

}


module.exports = BoardStrorage;
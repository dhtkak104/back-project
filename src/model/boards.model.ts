import { boardDTO } from '../interface/baordsDTO';
import { db } from '../config/db';

export class BoardModel {  
  getBoards() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_boards;';
      db.query(query, (err:any, data:any) => {
        if(err) reject(`${err}`);
        else    resolve(data.rows);
      });
    }); 
  };

  insertBoard(board: boardDTO) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO demo.t_boards (title, contents) VALUES ($1, $2);'
      db.query(query, [board.title, board.contents], (err:any, data:any) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };

  getBoard(board_no: string) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM demo.t_boards WHERE board_no = $1;'
      db.query(query, [board_no], (err:any, data:any)  => {
        if(err) reject(`${err}`);
        else    resolve(data.rows[0]);
      });
    }); 
  };

  updateBoard(board: boardDTO) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE demo.t_boards SET title = $1, contents = $2, update_ts = NOW() WHERE board_no = $3;'
      db.query(query, [board.title, board.contents, board.board_no], (err:any, data:any) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };

  deleteBoard(board_no: string) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM demo.t_boards WHERE board_no = $1;'
      db.query(query, [board_no], (err:any, data:any) => {
        if(err) reject(`${err}`);
        else    resolve({});
      });
    }); 
  };
}


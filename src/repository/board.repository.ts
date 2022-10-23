import { connect } from '../config/db';
import { Board } from '../models/board.model';

export class BoardRepository {

  private db: any = {};
  private boardRespository: any;

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
    this.boardRespository = this.db.sequelize.getRepository(Board);
  }

  async getBoards() {
    return await this.boardRespository.findAll();
  }

  async getBoard(boardNo: string) {
    return await this.boardRespository.findByPk(boardNo);
  }

  async insertBoard(board: Board) {
    return await this.boardRespository.create(board);
  }

  async updateBoard(board: Board) {    
    return await this.boardRespository.update(board, {where: {board_no: board.board_no}});
  }

  async deleteBoard(boardNo: string) {
    return await this.boardRespository.destroy({where: {board_no: boardNo}});;
  }

};
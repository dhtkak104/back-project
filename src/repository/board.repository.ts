import { connect } from '../config/db';
import { Board } from '../models/board.model';
import { boardDTO } from '../interface/baordsDTO';

export class BoardRepository {
 
  private db: any = {};
  private boardRepository: any;

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
    this.boardRepository = this.db.sequelize.getRepository(Board);
  }

  async getBoards() {
    return await this.boardRepository.findAll();
  }

  async getBoard(boardNo: string) {
    return await this.boardRepository.findByPk(boardNo);
  }

  async insertBoard(board: boardDTO) {
    return await this.boardRepository.create(board);;
  }

  async updateBoard(board: boardDTO) {    
    return await this.boardRepository.update(board, {where: {board_no: board.board_no}});;
  }

  async deleteBoard(boardNo: string) {
    return await this.boardRepository.destroy({where: {board_no: boardNo}});;
  }

};
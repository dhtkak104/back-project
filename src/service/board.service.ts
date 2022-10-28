import { BoardModel } from '../model/boards.model';
import { BoardDTO } from '../schema/boardsSchema';
//import { boardDTO } from '../interface/baordsDTO';

export class BoardService {

  private boardModel: BoardModel;

  constructor() {
    this.boardModel = new BoardModel();
  }

  async getBoards() {
    const result = {status:200, msg:'', data:{}};
    const boards = await this.boardModel.getBoards();
    result.data = {boards};
    return result;
  };
  
  async insertBoard(board: BoardDTO) {
    const result = {status:200, msg:'', data:{}};
    await this.boardModel.insertBoard(board);
    return result;
  };
  
  async getBoard(board_no: string) {
    const result = {status:200, msg:'', data:{}};
    const board = await this.boardModel.getBoard(board_no);
    //result.data = board; // 궁금: result.data = board; 안되는 이유
    return result;
  };
  
  async updateBoard(board: BoardDTO) {
    const result = {status:200, msg:'', data:{}};
    await this.boardModel.updateBoard(board);
    return result;
  };
  
  async deleteBoard(board_no: string) {
    const result = {status:200, msg:'', data:{}};
    await this.boardModel.deleteBoard(board_no);
    return result;
  };
}
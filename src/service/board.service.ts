import { boardDTO } from '../interface/baordsDTO';
import { BoardRepository } from '../repository/board.repository';

export class BoardService {

  private boardRepository: BoardRepository;

  constructor() {
    this.boardRepository = new BoardRepository();
  }

  async getBoards() {
    const result = {status:200, msg:'', data:{}};
    const boards = await this.boardRepository.getBoards();
    result.data = {boards};
    return result;
  };
  
  async insertBoard(board: boardDTO) {
    const result = {status:200, msg:'', data:{}};
    await this.boardRepository.insertBoard(board);
    return result;
  };
  
  async getBoard(board_no: string) {
    const result = {status:200, msg:'', data:{}};
    const board = await this.boardRepository.getBoard(board_no);
    result.data = board; // 궁금: result.data = board; 안되는 이유
    return result;
  };
  
  async updateBoard(board: boardDTO) {
    const result = {status:200, msg:'', data:{}};
    await this.boardRepository.updateBoard(board);
    return result;
  };
  
  async deleteBoard(board_no: string) {
    const result = {status:200, msg:'', data:{}};
    await this.boardRepository.deleteBoard(board_no);
    return result;
  };
}
import { boardDTO } from '../interface/baordsDTO';
import { boardsModel } from '../models/boardsModel';

export const boardsService = {
  getBoards: async () => {
    const result = {status:200, msg:'', data:{}};
    const boards = await boardsModel.getBoards();
    result.data = {boards};
    return result;
  },
  
  insertBoard: async (board: boardDTO) => {
    const result = {status:200, msg:'', data:{}};
    await boardsModel.insertBoard(board);
    return result;
  },
  
  getBoard: async (board_no: string) => {
    const result = {status:200, msg:'', data:{}};
    const board = await boardsModel.getBoard(board_no);
    // 궁금: result.data = board; 안되는 이유
    return result;
  },
  
  updateBoard: async (board: boardDTO) => {
    console.log(board);
    const result = {status:200, msg:'', data:{}};
    await boardsModel.updateBoard(board);
    return result;
  },
  
  deleteBoard: async (board_no: string) => {
    const result = {status:200, msg:'', data:{}};
    await boardsModel.deleteBoard(board_no);
    return result;
  },
}
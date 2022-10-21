import { Request, Response } from "express";
import { BoardService } from '../service/board.service';

export class BoardsController {

  private boardService: BoardService;

  constructor() {
    this.boardService = new BoardService();
  }

  async selectBoards(req: Request, res: Response) {
    const response = await this.boardService.getBoards();  
    return res.status(response.status).json(response);
  };

  async insertBoard(req: Request, res: Response) {
    const response = await this.boardService.insertBoard(req.body);
    return res.status(response.status).json(response);   
  };

  async selectBoard(req: Request, res: Response) {
    const response = await this.boardService.getBoard(req.params.board_no);
    return res.status(response.status).json(response);
  };

  async updateBoard(req: Request, res: Response) {
    const response = await this.boardService.updateBoard(req.body);
    return res.status(response.status).json(response);
  };

  async deleteBoard(req: Request, res: Response) {
    const response = await this.boardService.deleteBoard(req.params.board_no);
    return res.status(response.status).json(response);
  };
};

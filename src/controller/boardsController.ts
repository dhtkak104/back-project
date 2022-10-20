import { Request, Response } from "express";
import {  boardsService } from '../service/boardsService';

export const boardsController = {
  selectBoards: async (req: Request, res: Response) => {
    const response = await boardsService.getBoards();  
    return res.status(response.status).json(response);
  },

  insertBoard: async (req: Request, res: Response) => {
    const response = await boardsService.insertBoard(req.body);
    return res.status(response.status).json(response);   
  },

  selectBoard: async (req: Request, res: Response) => {
    const response = await boardsService.getBoard(req.params.board_no);
    return res.status(response.status).json(response);
  },
  updateBoard: async (req: Request, res: Response) => {
    const response = await boardsService.updateBoard(req.body);
    return res.status(response.status).json(response);
  },

  deleteBoard: async (req: Request, res: Response) => {
    const response = await boardsService.deleteBoard(req.params.board_no);
    return res.status(response.status).json(response);
  },
};

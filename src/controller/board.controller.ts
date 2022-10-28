import { Express, Request, Response } from 'express';
import validateReqiest from '../middleware/validateRequest';
import { insertBoardSchema } from '../schema/boardsSchema';
import { BoardService } from '../service/board.service';

const boardService = new BoardService();

export default (app: Express) => {
  
  app.get('/boards', async (req: Request, res: Response) => {
    const response = await boardService.getBoards();  
    return res.status(response.status).json(response);
  });

  app.post('/boards', validateReqiest(insertBoardSchema), async (req: Request, res: Response) => {
    const response = await boardService.insertBoard(req.body);
    return res.status(response.status).json(response);   
  });

  app.get('/boards/:board_no', async (req: Request, res: Response) => {
    const response = await boardService.getBoard(req.params.board_no);
    return res.status(response.status).json(response);
  });

  app.put('/boards/:board_no', async (req: Request, res: Response) => {
    const response = await boardService.updateBoard(req.body);
    return res.status(response.status).json(response);
  });

  app.delete('/boards/:board_no',async (req: Request, res: Response) => {
    const response = await boardService.deleteBoard(req.params.board_no);
    return res.status(response.status).json(response);
  });
};

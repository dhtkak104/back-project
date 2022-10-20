import { Express, Request, Response } from 'express';
import { boardsController } from './controller/boardsController';
import validateReqiest from './middleware/validateRequest';
import { insertBoardSchema } from './schema/boardsSchema';


export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.get('/boards', boardsController.selectBoards);
  app.post('/boards', validateReqiest(insertBoardSchema), boardsController.insertBoard);
  app.get('/boards/:board_no', boardsController.selectBoard);
  app.put('/boards/:board_no', boardsController.updateBoard);
  app.delete('/boards/:board_no', boardsController.deleteBoard);
}
 
// 궁금: export const VS export class
// 궁금 : class Board {} module.exports = Board; 네임드방식?  
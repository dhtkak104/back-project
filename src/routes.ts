import { Express, Request, Response } from 'express';
import { BoardsController } from './controller/board.controller';
import { SchoolController } from './controller/school.controller';
import validateReqiest from './middleware/validateRequest';
import { insertBoardSchema } from './schema/boardsSchema';
import { selelctSchoolsSchema } from './schema/schoolsSchema';

export default function (app: Express) {
  const boardsController = new BoardsController();
  const schoolController = new SchoolController();

  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  
  app.get('/boards', boardsController.selectBoards);
  app.post('/boards', validateReqiest(insertBoardSchema), boardsController.insertBoard);
  app.get('/boards/:board_no', boardsController.selectBoard);
  app.put('/boards/:board_no', boardsController.updateBoard);
  app.delete('/boards/:board_no', boardsController.deleteBoard);

  app.get('/schools', validateReqiest(selelctSchoolsSchema), schoolController.selectSchools);
}
 
// 궁금: export const VS export class
// 궁금 : class Board {} module.exports = Board; 네임드방식?  
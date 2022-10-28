import { Express, Request, Response } from 'express';

export default (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
}
 
// 궁금: export const VS export func
// 궁금 : class Board {} module.exports = Board; 네임드방식?   >> commonJS Default
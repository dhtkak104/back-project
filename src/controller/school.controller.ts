import { Express, Request, Response } from "express";
import validateReqiest from '../middleware/validateRequest';
import { selelctSchoolsSchema } from '../schema/schoolsSchema';
import { SchoolService } from '../service/school.service';

const schoolService = new SchoolService();

export default (app: Express) => {
  app.get('/schools', validateReqiest(selelctSchoolsSchema), async (req: Request, res: Response) => { 
    const response = await schoolService.getSchools(req.body); 
    return res.status(response.status).json(response);
  });
};


// 궁금: req.query 를 서비스에서 받는 법 (type)
// 궁금: 해당소스가 어느 브런치를 바라보고 있는지 확인
import { Request, Response } from "express";
import { schoolsService } from '../service/schoolsService';

export const schoolsController = {
  selectSchools: async (req: Request, res: Response) => { 
    const response = await schoolsService.getSchools(req.body); 
    return res.status(response.status).json(response);
  }
};


// 궁금: req.query 를 서비스에서 받는 법
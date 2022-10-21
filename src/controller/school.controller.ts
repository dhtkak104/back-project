import { Request, Response } from "express";
import { SchoolService } from '../service/school.service';

export class SchoolController {

  private schoolService: SchoolService;

  constructor() {
    this.schoolService = new SchoolService();
  }

  async selectSchools(req: Request, res: Response) { 
    const response = await this.schoolService.getSchools(req.body); 
    return res.status(response.status).json(response);
  }
};


// 궁금: req.query 를 서비스에서 받는 법 (type)
// 궁금: 해당소스가 어느 브런치를 바라보고 있는지 확인
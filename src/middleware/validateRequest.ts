import { AnySchema, ValidationError } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validate = (schema: AnySchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      parmas: req.params,
    });
    return next();
  } 
  catch (e) {
    let sendResult = e;
    if(e instanceof ValidationError) {
      sendResult = e.errors;
    }
    return res.status(400).send(sendResult);
  }
};

export default validate;
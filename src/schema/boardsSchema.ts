import { object, string, number } from 'yup';

export const insertBoardSchema = object({
  body: object({
    title: string()
      .required('title is required')
      .max(1000, 'title is too long'),
    contents: string()
      .required('contentes is required')
      .max(4000, 'contentes is too long')
  })
});

export const selelctBoardSchema = object({
  query: object({
    board_id: number()
      .required('board_id is not number')
  })
});
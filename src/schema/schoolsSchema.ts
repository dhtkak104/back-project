import { object, string } from 'yup';

export const selelctSchoolsSchema = object({
  query: object({
    gubun: string()
      .required('gubun is required')
  })
});
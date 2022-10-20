import request from 'request';
import { schoolSeachDTO } from '../interface/schoolsDTO';

export const schoolsService = {
  getSchools: async (param: schoolSeachDTO) => {
    const result = {status:200, msg:'', data:{}};

    param.apiKey = 'a8d332936f1c5e41faa8d95ba584091d';
    param.svcType = 'api';
    param.svcCode = 'SCHOOL';
    param.contentType = 'json';
    param.gubun = 'elem_list';
    
    const options = {
      uri: "https://www.career.go.kr/cnet/openapi/getOpenApi",
      qs:param
    };
    
    request(options, function(err, response, body){
      console.log(body);
    });

    return result;
  },
}
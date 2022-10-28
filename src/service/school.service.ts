import request from 'request-promise';
import { schoolSeachDTO } from '../interface/schoolsDTO';

export class SchoolService {
  async getSchools(param: schoolSeachDTO) {
    param.apiKey = 'a8d332936f1c5e41faa8d95ba584091d';
    param.svcType = 'api';
    param.svcCode = 'SCHOOL';
    param.contentType = 'json';
    param.gubun = 'elem_list';
    
    const options = {
      uri: "https://www.career.go.kr/cnet/openapi/getOpenApi",
      qs:param
    };
    
    let data = await request(options);
    data = JSON.parse(data);
    const result = {status:200, msg:'', data};
    //궁금 result.data = data

    console.log(data.dataSearch);
    
    return result;
  };
}

function doRequest(options: any) {
  return new Promise(function (resolve, reject) {
    request(options, function(err: Error, res:any, body:any){
      if (!err && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(err);
      }
    });
  });
}
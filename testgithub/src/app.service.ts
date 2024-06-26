import { Injectable } from '@nestjs/common';
//import { Client } from 'amocrm-js';
//const { Client } = require('amocrm-js');
import axios, { AxiosInstance } from 'axios';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
  
  async getLeadsApi(query: string)  {
    //console.log('AppService getLeadsApi query test ', query);
    const BASE_URL = 'https://ub6liw.amocrm.ru';
    let URL_LEADS: string;
    if (query)  URL_LEADS = BASE_URL + '/api/v4/leads?query=' + `${query}`
      else URL_LEADS = BASE_URL + '/api/v4/leads';

      //console.log('AppService getLeadsApi URL_LEADS test ', URL_LEADS);

const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkOTg3MTM3MWFlZTg3OTQzNGJkYWFmODJkMWJjZTZlZDI1NWQxODNlOWRjNTA1MTdiMzQ1YjJlYTljNTZmNTNjMGEyNGI5ZjY2NGE2MTdkIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiI5ZDk4NzEzNzFhZWU4Nzk0MzRiZGFhZjgyZDFiY2U2ZWQyNTVkMTgzZTlkYzUwNTE3YjM0NWIyZWE5YzU2ZjUzYzBhMjRiOWY2NjRhNjE3ZCIsImlhdCI6MTcxOTA0MzA0NCwibmJmIjoxNzE5MDQzMDQ0LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzJiNjljNmUtYWJhZC00NzNkLWI4OTUtYmJhZTU4Zjg1OGQ4In0.HCt9Li7lWLmxmmHQXH1rxSoiqQO5eW2-bKfewMng9fnMzFV225qxfhrwje6N05Bqev4UKYq2d2kwOpiQm2i7yBSKmzHSBo2CbZF9KH3BgO-o_82ooRwulrEt3esPc7WKexeQrzP7GQUKSxzEXw6FDhlNf8aZ04g9yNurIABdJtly0qR3Ok0FVgcY9ODuGNRFLUcKhMuc7W7v3Y9R-vpjcr7KMqQvn-bmDOqoiZCZGk5qhRAji1-auffDgywUJBCna889jCrVXqs7kQa6jH5KEDr_EHsOmG9ejzBJzQg9ZR78DYHhVvlPp48KmEfXyMvNhzcYbkqnoNAV8hsCnfsaNA';
const getInsurances = await /*this.*/axios.get(
  `${URL_LEADS}`,
  
  {
    headers:{
      Authorization: `Bearer ${extToken}`
    }
  }
)
    //console.log('AppService getLeadsApi result',getInsurances.data._embedded);
    const result = getInsurances.data._embedded;
    if (result){
      //console.log('AppService getLeadsApi result test',result.leads);
      return result.leads;
    } 
    else return 'Ничего не найдено.';
  }


  async getLeads(query: string)  {
    //console.log('AppService getLeads query ', query);
    const BASE_URL = 'https://ub6liw.amocrm.ru';
    var URL_LEADS: string;
    const _leads = [];
    let _leads1 = [];
    var lead = {
      name: "",
      price: "",
      user: "",
      date: "",
      status: "",
      pipeline_id: ""
    };
    
    if (query)  URL_LEADS = BASE_URL + '/api/v4/leads?query=' + `${query}`
      else URL_LEADS = BASE_URL + '/api/v4/leads';

      //console.log('AppService getLeads URL_LEADS ', URL_LEADS);

const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkOTg3MTM3MWFlZTg3OTQzNGJkYWFmODJkMWJjZTZlZDI1NWQxODNlOWRjNTA1MTdiMzQ1YjJlYTljNTZmNTNjMGEyNGI5ZjY2NGE2MTdkIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiI5ZDk4NzEzNzFhZWU4Nzk0MzRiZGFhZjgyZDFiY2U2ZWQyNTVkMTgzZTlkYzUwNTE3YjM0NWIyZWE5YzU2ZjUzYzBhMjRiOWY2NjRhNjE3ZCIsImlhdCI6MTcxOTA0MzA0NCwibmJmIjoxNzE5MDQzMDQ0LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzJiNjljNmUtYWJhZC00NzNkLWI4OTUtYmJhZTU4Zjg1OGQ4In0.HCt9Li7lWLmxmmHQXH1rxSoiqQO5eW2-bKfewMng9fnMzFV225qxfhrwje6N05Bqev4UKYq2d2kwOpiQm2i7yBSKmzHSBo2CbZF9KH3BgO-o_82ooRwulrEt3esPc7WKexeQrzP7GQUKSxzEXw6FDhlNf8aZ04g9yNurIABdJtly0qR3Ok0FVgcY9ODuGNRFLUcKhMuc7W7v3Y9R-vpjcr7KMqQvn-bmDOqoiZCZGk5qhRAji1-auffDgywUJBCna889jCrVXqs7kQa6jH5KEDr_EHsOmG9ejzBJzQg9ZR78DYHhVvlPp48KmEfXyMvNhzcYbkqnoNAV8hsCnfsaNA';
const getInsurances = await /*this.*/axios.get(
  `${URL_LEADS}`,
  {
    headers:{
      Authorization: `Bearer ${extToken}`
    }
  }
)

    //console.log('AppService getLeads result',getInsurances.data._embedded);
    if (getInsurances.data._embedded){
      //console.log('AppService getLeads result',getInsurances.data._embedded.leads);
      const _embedded = /*await*/ getInsurances.data._embedded.leads;
      //console.log('AppService getLeads _embedded',_embedded);
      
      _embedded.forEach(e => {
        let date = new Date(e.created_at*1000).toLocaleDateString();
        let user_id = e.responsible_user_id;

        _leads1.push({
          name: e.name, 
          price: e.price, 
          date: date, 
          user_id: e.responsible_user_id, 
          status_id: e.status_id,
          pipeline_id: e.pipeline_id
        });
      })
      //console.log('AppService getLeads _leads1', _leads1);

      return _leads1;
    } 
    else return;
  }

  async getUsers(leads)  {
    //console.log('AppService getUsers leads ', leads);
    const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/users';
    let URL_LEADS: string;
    //console.log('AppService getUsers BASE_URL ', BASE_URL);
    URL_LEADS = BASE_URL;
    const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkOTg3MTM3MWFlZTg3OTQzNGJkYWFmODJkMWJjZTZlZDI1NWQxODNlOWRjNTA1MTdiMzQ1YjJlYTljNTZmNTNjMGEyNGI5ZjY2NGE2MTdkIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiI5ZDk4NzEzNzFhZWU4Nzk0MzRiZGFhZjgyZDFiY2U2ZWQyNTVkMTgzZTlkYzUwNTE3YjM0NWIyZWE5YzU2ZjUzYzBhMjRiOWY2NjRhNjE3ZCIsImlhdCI6MTcxOTA0MzA0NCwibmJmIjoxNzE5MDQzMDQ0LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzJiNjljNmUtYWJhZC00NzNkLWI4OTUtYmJhZTU4Zjg1OGQ4In0.HCt9Li7lWLmxmmHQXH1rxSoiqQO5eW2-bKfewMng9fnMzFV225qxfhrwje6N05Bqev4UKYq2d2kwOpiQm2i7yBSKmzHSBo2CbZF9KH3BgO-o_82ooRwulrEt3esPc7WKexeQrzP7GQUKSxzEXw6FDhlNf8aZ04g9yNurIABdJtly0qR3Ok0FVgcY9ODuGNRFLUcKhMuc7W7v3Y9R-vpjcr7KMqQvn-bmDOqoiZCZGk5qhRAji1-auffDgywUJBCna889jCrVXqs7kQa6jH5KEDr_EHsOmG9ejzBJzQg9ZR78DYHhVvlPp48KmEfXyMvNhzcYbkqnoNAV8hsCnfsaNA';
    const getInsurances = await /*this.*/axios.get(
    `${URL_LEADS}`,
    {
      headers:{
        Authorization: `Bearer ${extToken}`
      }
    }
  )

  const _embedded1 = /*await*/ getInsurances;
      //console.log('AppService getLeads _embedded',_embedded1.data._embedded.users);
  const _users = _embedded1.data._embedded.users;
  for (let j =0; j < leads.length; j++ ) {
  
     for (let i = 0; i < _users.length; i++ ) {
      if (_users[i].id === leads[j].user_id) leads[j].user = _users[i].name;
     // console.log('AppService for _users[i].id', _users[i].id, 'leads[j].user_id ',leads[j].user_id, 'leads[j].user ', leads[j].user);
     }
     //console.log('AppService getUsers leads[j] ', leads[j]);
  };
  //console.log('AppService getLeads leads', leads);
  return leads;
  }

  async getStatus(leads)  {
    const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/leads/pipelines/';
    let URL_LEADS: string;
    let getInsurances;
    const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkOTg3MTM3MWFlZTg3OTQzNGJkYWFmODJkMWJjZTZlZDI1NWQxODNlOWRjNTA1MTdiMzQ1YjJlYTljNTZmNTNjMGEyNGI5ZjY2NGE2MTdkIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiI5ZDk4NzEzNzFhZWU4Nzk0MzRiZGFhZjgyZDFiY2U2ZWQyNTVkMTgzZTlkYzUwNTE3YjM0NWIyZWE5YzU2ZjUzYzBhMjRiOWY2NjRhNjE3ZCIsImlhdCI6MTcxOTA0MzA0NCwibmJmIjoxNzE5MDQzMDQ0LCJleHAiOjE3MTk3MDU2MDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzJiNjljNmUtYWJhZC00NzNkLWI4OTUtYmJhZTU4Zjg1OGQ4In0.HCt9Li7lWLmxmmHQXH1rxSoiqQO5eW2-bKfewMng9fnMzFV225qxfhrwje6N05Bqev4UKYq2d2kwOpiQm2i7yBSKmzHSBo2CbZF9KH3BgO-o_82ooRwulrEt3esPc7WKexeQrzP7GQUKSxzEXw6FDhlNf8aZ04g9yNurIABdJtly0qR3Ok0FVgcY9ODuGNRFLUcKhMuc7W7v3Y9R-vpjcr7KMqQvn-bmDOqoiZCZGk5qhRAji1-auffDgywUJBCna889jCrVXqs7kQa6jH5KEDr_EHsOmG9ejzBJzQg9ZR78DYHhVvlPp48KmEfXyMvNhzcYbkqnoNAV8hsCnfsaNA';
    for (let i = 0; i < leads.length; i++)  {
      URL_LEADS = BASE_URL + `${leads[i].pipeline_id}`+'/statuses/'+`${leads[i].status_id}`
      getInsurances = await /*this.*/axios.get(
        `${URL_LEADS}`,
        {
          headers:{
            Authorization: `Bearer ${extToken}`
          }
        }
      )
      //console.log('AppService getStatus getInsurances ', getInsurances.data);
      leads[i].status = getInsurances.data.name;
    }
    //console.log('AppService getStatus leads ', leads);
    return leads;
  }

}

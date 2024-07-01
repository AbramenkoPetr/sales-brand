import { Injectable } from '@nestjs/common';
//import { Client } from 'amocrm-js';
//const { Client } = require('amocrm-js');
import axios, { AxiosInstance } from 'axios';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
  //const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg'
  async getLeadsApi(query: string)  {
    //console.log('AppService getLeadsApi query test ', query);
    if (query.length < 3 && query.length != 0) return "Поисковая подстрока меньше трех символов";
    const BASE_URL = 'https://ub6liw.amocrm.ru';
    let URL_LEADS: string;
    if (query)  URL_LEADS = BASE_URL + '/api/v4/leads?query=' + `${query}`
      else URL_LEADS = BASE_URL + '/api/v4/leads';

      //console.log('AppService getLeadsApi URL_LEADS test ', URL_LEADS);

const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
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

const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
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
    if (!leads) return; //** */
    //console.log('AppService getUsers leads ', leads);
    const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/users';
    let URL_LEADS: string;
    //console.log('AppService getUsers BASE_URL ', BASE_URL);
    URL_LEADS = BASE_URL;
    const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
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
    if (!leads) return; //** */
    const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/leads/pipelines/';
    let URL_LEADS: string;
    let getInsurances;
    const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
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

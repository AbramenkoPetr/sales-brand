"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    async getLeadsApi(query) {
        if (query.length < 3 && query.length != 0)
            return "Поисковая подстрока меньше трех символов";
        const BASE_URL = 'https://ub6liw.amocrm.ru';
        let URL_LEADS;
        if (query)
            URL_LEADS = BASE_URL + '/api/v4/leads?query=' + `${query}`;
        else
            URL_LEADS = BASE_URL + '/api/v4/leads';
        const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
        const getInsurances = await axios_1.default.get(`${URL_LEADS}`, {
            headers: {
                Authorization: `Bearer ${extToken}`
            }
        });
        const result = getInsurances.data._embedded;
        if (result) {
            return result.leads;
        }
        else
            return 'Ничего не найдено.';
    }
    async getLeads(query) {
        const BASE_URL = 'https://ub6liw.amocrm.ru';
        var URL_LEADS;
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
        if (query)
            URL_LEADS = BASE_URL + '/api/v4/leads?query=' + `${query}`;
        else
            URL_LEADS = BASE_URL + '/api/v4/leads';
        const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
        const getInsurances = await axios_1.default.get(`${URL_LEADS}`, {
            headers: {
                Authorization: `Bearer ${extToken}`
            }
        });
        if (getInsurances.data._embedded) {
            const _embedded = getInsurances.data._embedded.leads;
            _embedded.forEach(e => {
                let date = new Date(e.created_at * 1000).toLocaleDateString();
                let user_id = e.responsible_user_id;
                _leads1.push({
                    name: e.name,
                    price: e.price,
                    date: date,
                    user_id: e.responsible_user_id,
                    status_id: e.status_id,
                    pipeline_id: e.pipeline_id
                });
            });
            return _leads1;
        }
        else
            return;
    }
    async getUsers(leads) {
        if (!leads)
            return;
        const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/users';
        let URL_LEADS;
        URL_LEADS = BASE_URL;
        const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
        const getInsurances = await axios_1.default.get(`${URL_LEADS}`, {
            headers: {
                Authorization: `Bearer ${extToken}`
            }
        });
        const _embedded1 = getInsurances;
        const _users = _embedded1.data._embedded.users;
        for (let j = 0; j < leads.length; j++) {
            for (let i = 0; i < _users.length; i++) {
                if (_users[i].id === leads[j].user_id)
                    leads[j].user = _users[i].name;
            }
        }
        ;
        return leads;
    }
    async getStatus(leads) {
        if (!leads)
            return;
        const BASE_URL = 'https://ub6liw.amocrm.ru/api/v4/leads/pipelines/';
        let URL_LEADS;
        let getInsurances;
        const extToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZGQ4Mzc1ZjM2ZWUxMzNlZGQ5ZTM5YzNiZTM0MTU1MzFkNTRmMDMwZjE4N2JiZGU3ZGMxNjUxMWM1ZmE1OTIyNzQzY2Y0NWJiMTEzN2RlIn0.eyJhdWQiOiJkM2ZiNTRjMS1mODFjLTRhNDktYWUwYi1mYzM2OTM3OWE0NzgiLCJqdGkiOiJkZGRkODM3NWYzNmVlMTMzZWRkOWUzOWMzYmUzNDE1NTMxZDU0ZjAzMGYxODdiYmRlN2RjMTY1MTFjNWZhNTkyMjc0M2NmNDViYjExMzdkZSIsImlhdCI6MTcxOTc0NTA5MiwibmJmIjoxNzE5NzQ1MDkyLCJleHAiOjE3NTEzMjgwMDAsInN1YiI6IjExMTg4NzU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODEzMTQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDk2Y2QyZGYtYTA1ZS00ZjRlLTgzZDYtNDE1Y2FiNzZiM2Q5In0.KgcNvy6nZPuJnk09ntv1M0bcGbIeFkncotK_nbgyqit8E-ProknF3TxLUcApO9CXowVoeOElc2NQiJQNG3HwZpFywhxdaaRO8MUWnHmVajoTQtXUZ1esMo0E2vyuKljkASUBUSwnVVEsHdmtP-lVqYQ9LzjVg7zXOK4xgsuWupK3pE4gl2R3jfxkFyTCM77b_ZetjnFZmbQ0ZMA0wl3HY2xrcRSnL8UB2N7DYc-ZP8qrXMHKgNahKnk2bk9w-Pk7eLBzrfTDDZ8Jn5JbGs8A8v-7ZRYcfaxAavVAQ7LeYrkwtF8dj3nOLrAU179cqxaPHdATDpZmDP0RZZ7DxdxgVg';
        for (let i = 0; i < leads.length; i++) {
            URL_LEADS = BASE_URL + `${leads[i].pipeline_id}` + '/statuses/' + `${leads[i].status_id}`;
            getInsurances = await axios_1.default.get(`${URL_LEADS}`, {
                headers: {
                    Authorization: `Bearer ${extToken}`
                }
            });
            leads[i].status = getInsurances.data.name;
        }
        return leads;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map
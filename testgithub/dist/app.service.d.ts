export declare class AppService {
    getLeadsApi(query: string): Promise<any>;
    getLeads(query: string): Promise<any[]>;
    getUsers(leads: any): Promise<any>;
    getStatus(leads: any): Promise<any>;
}

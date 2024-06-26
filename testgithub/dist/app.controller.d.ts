import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLeads(query: string): Promise<{
        leads: any[];
        title: string;
    }>;
    getLeadsApi(query: string): Promise<{
        leads: any;
        title: string;
    }>;
}

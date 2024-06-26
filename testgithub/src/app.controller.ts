import { Controller, Get, Render, } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/common';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('leads-list')
  async getLeads(@Query('query') query: string)  {
    //console.log('AppController @Get(/api/leads)');
    //console.log('AppController @Get(/api/leads)')
    let leads = await this.appService.getLeads(query)
    //console.log('AppController @Get(/api/leads) leads ', leads);
    leads = await this.appService.getUsers(leads);
    //console.log('AppController @Get(/api/leads) leads ', leads);
    leads = await this.appService.getStatus(leads);
    return {leads, title: 'Список сделок' };

  }
  

  @Get('/api/leads?')
  //@Render('leads-list')
  async getLeadsApi(@Query('query') query: string)  {
    //console.log('AppController @Get(/api/leads)');
    //console.log('AppController @Get(/api/leads)')
    const leads = await this.appService.getLeadsApi(query)
    //console.log('AppController @Get(/api/leads) leads ', leads);
    return {leads, title: 'Список' };

  }
}

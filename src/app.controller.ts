import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/auth')
  getAuth(@Req() request: Request): string {
    const userID = request['user'].sub;
    const token = request.headers.authorization.split('Bearer ')[1];
    return this.appService.getAuth(userID, token);
  }
}

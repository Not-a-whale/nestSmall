import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'request';
import { CreateCatDto } from './cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

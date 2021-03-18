import { InjectQueue } from '@nestjs/bull';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateJobDto } from './jobs.dto';

@Controller('jobs')
export class JobsController {
  @Get()
  async get() {
    return 'Hello from jobs controller';
  }
  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    console.log(createJobDto);
  }
}

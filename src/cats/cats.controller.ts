import { Controller, Post, Body, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from 'src/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<CreateCatDto[]> {
    return this.catsService.findAll();
  }
}

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [],
})
export class JobsModule {}

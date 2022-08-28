import { Module } from '@nestjs/common';
require('dotenv').config();
import { StudentsController } from './students/controller/students.controller';
import { StudentsService } from './students/service/students.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

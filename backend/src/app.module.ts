import { Module } from '@nestjs/common';
require('dotenv');
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

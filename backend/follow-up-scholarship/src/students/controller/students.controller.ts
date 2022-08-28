import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentDTO } from '../model/student-dto';
import { StudentsService } from '../service/students.service';

@Controller('v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAllStudents() {
    return this.studentsService.findAllStudents();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.studentsService.findById(id);
  }

  @Get(':course')
  findByCourse(@Param('course') course: string) {
    return this.studentsService.findByCourse(course);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.studentsService.findByEmail(email);
  }
  
  @Get(':advisor_name')
  findByAdvisorName(@Param('advisor_name') advisor_name: string) {
    return this.studentsService.findByAdvisorName(advisor_name);
  }

  @Post()
  createStudent(@Body() student: StudentDTO) {
    return this.studentsService.createStudent(student); //TODO : create student
  }

  @Patch()
  updateStudent(@Body() student: StudentDTO) {
    return this.studentsService.updateStudent(student); //TODO : update student
  }
  
}

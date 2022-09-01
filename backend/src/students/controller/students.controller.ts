import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { StudentDTO } from '../model/student.dto.input';
import { StudentsService } from '../service/students.service';

@Controller('v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
 
  @Get('/bycourse')
  async findByCourse(@Query('course') course: string) {
    return await this.studentsService.findByCourse(course);
  }

  @Get('all')
  findAllStudents() {
    return this.studentsService.findAllStudents();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const student: StudentDTO = await this.studentsService.findById(id);
   
    if (!student) throw new NotFoundException("Student not found");
   
    return student;
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

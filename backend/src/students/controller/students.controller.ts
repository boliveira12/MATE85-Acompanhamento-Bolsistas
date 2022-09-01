import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { StudentDTO } from '../model/student.dto.input';
import { StudentsService } from '../service/students.service';

@Controller('v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
 
  @Get('find/bycourse')
  async findByCourse(@Query('course') course: string) {
    return await this.studentsService.findByCourse(course);
  }

  @Get('/list/all')
  async findAllStudents() {
    return await this.studentsService.findAllStudents();
  }

  @Get('find/byid/:id')
  async findById(@Param('id') id: number) {
    const student: StudentDTO = await this.studentsService.findById(id);
   
    if (!student) throw new NotFoundException("Student not found");
   
    return student;
  }

  @Get('find/byemail')
  async findByEmail(@Query('email') email: string) {
    const student: StudentDTO = await this.studentsService.findByEmail(email);
   
    if (!student) throw new NotFoundException("Student not found");
   
    return student;
  }

  @Get('/find/byadvisorid/:advisor_id')
  async findByAdvisorId(@Param('advisor_id') advisor_id: number) {
    return await this.studentsService.findByAdvisorId(advisor_id);
  }

  @Post()
  async createStudent(@Body() student: StudentDTO) {
    return await this.studentsService.createStudent(student); //TODO : create student
  }

  @Patch()
  async updateStudent(@Body() student: StudentDTO) {
    return this.studentsService.updateStudent(student); //TODO : update student
  }
}

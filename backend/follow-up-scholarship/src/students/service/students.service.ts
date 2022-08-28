import { Injectable } from '@nestjs/common';
import { StudentEntity } from '../entities/students.entity';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentDTO } from '../model/student-dto';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(StudentEntity) private studentRepository: Repository<StudentEntity>) {}

  async findAllStudents(): Promise<StudentEntity[]> {
    return await this.studentRepository.find();
    // TODO: Return DTO instead of Entity
  }

  findById(id: number) {
    return `This action returns a student by id ${id} FROM REPOSITORY`;
  }

  findByCourse(course: string) {
    return `This action returns all students by course : ${course} FROM REPOSITORY`;
  }

  findByEmail(email: string) {
    return `This action returns a student by email FROM REPOSITORY`;
  }
  
  findByAdvisorName(advisor_name: string) {
    return `This action returns a student by advisor_name : ${advisor_name} FROM REPOSITORY`;
  }

  createStudent(student: StudentDTO) {
    return student; //TODO : create student
  }

  updateStudent(student: StudentDTO) {
    return student; //TODO : update student
  }
}

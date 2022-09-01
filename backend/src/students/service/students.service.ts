import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { StudentEntity } from '../entities/students.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDTO } from '../model/student.dto.input';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(StudentEntity) private studentRepository: Repository<StudentEntity>) {}

  async findAllStudents(): Promise<StudentDTO[]> {
    return await (await this.studentRepository.find()).map(student => student.toStudent());
  }

  async findById(id: number): Promise<StudentDTO> {
    try {
      const findStudent = await this.studentRepository.findOneBy({id});
      if (findStudent) return findStudent.toStudent();
      
      throw new NotFoundException("Student not found");

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByCourse(course: string) {
    try {
      return await (await this.studentRepository.find({
        where: { course: ILike(`%${course}%`) },
      })).map(student => student.toStudent());
    
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findByEmail(email: string) {
    return `This action returns a student by email FROM REPOSITORY`;
  }

  findByAdvisorName(advisor_name: string) {
    return `This action returns a student by advisor_name : ${advisor_name} FROM REPOSITORY`;
  }

  async createStudent(student: StudentDTO) {
    try {
	    await this.studentRepository.save(student);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  updateStudent(student: StudentDTO) {
    return student; //TODO : update student
  }
}

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

  async findByCourse(course: string): Promise<StudentDTO[]> {
    try {
      return await (await this.studentRepository.find({
        where: { course: ILike(`%${course}%`) },
      })).map(student => student.toStudent());
    
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByEmail(email: string): Promise<StudentDTO> {
    try {
      const findStudent = await this.studentRepository.findOne({where: {email}});
      if (findStudent) return findStudent.toStudent();
      
      throw new NotFoundException("Student not found");

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByAdvisorId(advisor_id: number): Promise<StudentDTO[]> {
    try {
      return await (await this.studentRepository.find({
        where: { advisor_id: advisor_id },
      })).map(student => student.toStudent());
    
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createStudent(student: StudentDTO) {
    try {
	    await this.studentRepository.save(student);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateStudent(student: StudentDTO) {
    return student; //TODO : update student
  }
}

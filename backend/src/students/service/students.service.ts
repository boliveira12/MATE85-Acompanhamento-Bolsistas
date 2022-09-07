import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { StudentEntity } from '../entities/students.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDTO, ResponseStudentDTO } from '../model/student.dto.input';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async findAllStudents(): Promise<ResponseStudentDTO[]> {
    return await (await this.studentRepository.find()).map((student) => student.toStudent());
  }

  async findById(id: number): Promise<ResponseStudentDTO> {
    try {
      const findStudent = await this.studentRepository.findOneBy({ id });
      if (findStudent) return findStudent.toStudent();

      throw new NotFoundException('Student not found');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByCourse(course: string): Promise<ResponseStudentDTO[]> {
    try {
      return await (
        await this.studentRepository.find({
          where: { course: ILike(`%${course}%`) },
        })
      ).map((student) => student.toStudent());
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByEmail(email: string): Promise<ResponseStudentDTO> {
    try {
      const findStudent = await this.studentRepository.findOne({
        where: { email },
      });
      if (findStudent) return findStudent.toStudent();

      throw new NotFoundException('Student not found');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByAdvisorId(advisor_id: number): Promise<ResponseStudentDTO[]> {
    try {
      return await (
        await this.studentRepository.find({
          where: { advisor_id: advisor_id },
        })
      ).map((student) => student.toStudent());
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createStudent(student: CreateStudentDTO) {
    try {
      const password = hashPassword(student.password);
      await this.studentRepository.save(student);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateStudent(student: CreateStudentDTO) {
    return student; //TODO : update student
  }
}

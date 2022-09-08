import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { ILike, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { StudentEntity } from '../entities/students.entity'
import { CreateStudentDTO } from '../model/student.dto.input'
import { hashPassword } from '../../utils/bcrypt'

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>
  ) {}

  async findAllStudents(): Promise<StudentEntity[]> {
    return await this.studentRepository.find()
  }

  async findById(id: number) {
    try {
      const findStudent = await this.studentRepository.findOneBy({ id })
      if (findStudent) return findStudent

      throw new NotFoundException('Student not found')
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findByCourse(course: string): Promise<StudentEntity[]> {
    try {
      return await this.studentRepository.find({
        where: { course: ILike(`%${course}%`) }
      })
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findByEmail(email: string): Promise<StudentEntity> {
    try {
      const findStudent = await this.studentRepository.findOne({
        where: { email }
      })
      if (findStudent) return findStudent

      throw new NotFoundException('Student not found')
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findByAdvisorId(advisor_id: number): Promise<StudentEntity[]> {
    try {
      return await this.studentRepository.find({
        where: { advisor_id }
      })
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async createStudent(student: CreateStudentDTO) {
    try {
      const passwordHash = await hashPassword(student.password)
      const newStudent = this.studentRepository.create({
        ...student,
        password: passwordHash
      })
      await this.studentRepository.save(newStudent)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async updateStudent(student: any) {
    //TODO: IMPLEMENTS
    return student // TODO : update student
  }
}

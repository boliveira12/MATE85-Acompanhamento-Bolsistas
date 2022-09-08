import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { ILike, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {
  StudentEntity,
  toStudentResponseDTO
} from '../entities/students.entity'
import { CreateStudentDTO } from '../model/student.dto.input'
import { hashPassword } from '../../utils/bcrypt'
import { ResponseStudentDTO } from '../model/student.response.dto'

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>
  ) {}

  async findAllStudents(): Promise<ResponseStudentDTO[]> {
    const students: StudentEntity[] = await this.studentRepository.find()
    return students.map((student) => toStudentResponseDTO(student))
  }

  async findById(id: number) {
    const student = await this.studentRepository.findOneBy({ id })
    if (!student) throw new NotFoundException('Student not found')
    return toStudentResponseDTO(student)
  }

  async findByCourse(course: string): Promise<ResponseStudentDTO[]> {
    return await this.studentRepository
      .find({
        where: { course: ILike(`%${course}%`) }
      })
      .then((students) =>
        students.map((student) => toStudentResponseDTO(student))
      )
  }

  async findByEmail(email: string): Promise<ResponseStudentDTO> {
    const findStudent = await this.studentRepository.findOne({
      where: { email }
    })
    if (findStudent) return toStudentResponseDTO(findStudent)

    throw new NotFoundException('Student not found')
  }

  async findByAdvisorId(advisor_id: number): Promise<ResponseStudentDTO[]> {
    const students: StudentEntity[] = await this.studentRepository.find({
      where: { advisor_id }
    })
    return students.map((student) => toStudentResponseDTO(student))
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

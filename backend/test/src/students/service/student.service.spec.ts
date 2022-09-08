import { Test, TestingModule } from '@nestjs/testing'
import { StudentsService } from 'src/students/service/students.service'
import { ResponseStudentDTO } from 'src/students/model/student.dto.input'
import { StudentEntity } from 'src/students/entities/students.entity'

describe('User Service', () => {
  let studentService: StudentsService

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [StudentsService]
    }).compile()

    studentService = await moduleFixture.resolve(StudentsService)
  })

  test('Get student by ID', async () => {
    const student = new ResponseStudentDTO(
      1,
      '413431',
      '123456789',
      'John Doe',
      'email@gmail.com',
      'Computer Science',
      'https://lattes.cnpq.br/1234567890123456',
      1,
      new Date(),
      '12345678901',
      'STUDENT'
    )

    jest
      .spyOn(studentService, 'findById')
      .mockResolvedValue(new StudentEntity())

    const test = await studentService.findById(1)
    expect(test).toEqual(student)
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { StudentsService } from '../service/students.service'
import { ResponseStudentDTO } from '../model/student.response.dto'
import { StudentEntity } from '../entities/students.entity'
import { getRepositoryToken } from '@nestjs/typeorm'
import { NotFoundException } from '@nestjs/common'

describe('User Service', () => {
  let service: StudentsService

  const mockRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn()
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        StudentsService,
        StudentEntity,
        { provide: getRepositoryToken(StudentEntity), useValue: mockRepository }
      ]
    }).compile()

    service = await moduleFixture.resolve(StudentsService)
  })

  beforeEach(() => {
    mockRepository.find.mockReset()
    mockRepository.findOneBy.mockReset()
    mockRepository.create.mockReset()
  })

  describe('findUserById', () => {
    it('Should return student after Get student by ID', async () => {
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

      mockRepository.findOneBy.mockResolvedValue(student)
      const studentResult = await service.findById(1)
      expect(studentResult).toMatchObject({ name: student.name })
      expect(mockRepository.findOneBy).toBeCalledTimes(1)
    })

    it('Should return NotFoundException if not find a user', async () => {
      mockRepository.findOneBy.mockReturnValue(null)
      expect(service.findById(1)).rejects.toBeInstanceOf(NotFoundException)
      expect(mockRepository.findOneBy).toBeCalledTimes(1)
    })
  })
})
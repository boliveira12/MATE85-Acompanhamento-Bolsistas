import { BadRequestException } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm";
import { StudentEntity } from "../../students/entities/students.entity";
import { Repository } from "typeorm";
import { UserDTO } from "../model/user.dto.input";

export class UserService{
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>
    ){}

    async findUserByTaxId(tax_id: string): Promise<UserDTO>{
        try{
          const user = await this.studentRepository.findOne({where: {tax_id}})
          if (user) return new UserDTO(user);
        }catch(error){
          throw new BadRequestException(error.message)
        }
    }
}
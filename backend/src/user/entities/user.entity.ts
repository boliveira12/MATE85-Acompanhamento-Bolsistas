import { StudentEntity } from "src/students/entities/students.entity"
import { UserDTO } from "src/user/model/user.dto.input"

export class UserEntity{
    id: number
    tax_id: string
    name: string
    email: string
    password: string
    role: string

    constructor(user: StudentEntity) {
        this.id = user.id
        this.tax_id = user.tax_id
        this.name = user.name
        this.role = user.role
        this.password = user.password
    }
}
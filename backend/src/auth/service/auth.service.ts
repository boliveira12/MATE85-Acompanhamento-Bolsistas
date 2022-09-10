import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UserService } from '../../user/service/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(tax_id: string, passwordInserted: string): Promise<any> {
    try {
      const user = await this.userService.findUserByTaxId(tax_id)
      const validPassword = await bcrypt.compare(
        passwordInserted,
        user.password
      )
      if (user && validPassword) return user
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST
      )
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST
      )
    }
  }

  async login(user: any) {
    const payload = {
      username: user.tax_id,
      sub: user.id
    }
    console.log(payload)
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}

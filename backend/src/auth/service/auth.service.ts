import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { comparePassword, hashPassword } from '../../utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(tax_id: string, passwordInserted: string): Promise<any> {
    try{
      console.log(tax_id, passwordInserted)
      const user = await this.userService.findUserByTaxId(tax_id);
      await this.verifyPassword(passwordInserted, user.password)
      user.password = undefined
      const { password, ...result } = user;
      return result;
    }catch(error){
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  async verifyPassword(plainText: string, hashedPassword: string){
    const insertedHashedPassword = await hashPassword(plainText)
    const isPasswordMatching = await comparePassword(insertedHashedPassword, hashedPassword)
    if(!isPasswordMatching)
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
  }

  async login(user: any){
    const payload = {tax_id: user.tax_id, sub: user.id, email: user.email}
    console.log(payload)
    return{
      access_token: this.jwtService.sign(payload),
    }
  }
}
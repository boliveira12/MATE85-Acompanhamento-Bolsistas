import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { AuthService } from '../service/auth.service'
import { LocalAuthGuard } from '../guards/local-auth.guard'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  }
}

import { Controller, Delete, Get, Inject, Patch, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(@Inject(LoginService) private loginModel: LoginService) {}

  @Post()
  public async getLogin() {
    return await this.loginModel.loginSevice();
  }
}

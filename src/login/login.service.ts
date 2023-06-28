import { Injectable } from '@nestjs/common';
import LoginModel from './login.model';

@Injectable()
export class LoginService {
  constructor(private loginModel: LoginModel) {}
  public async loginSevice() {
    if (true) {
      return await this.loginModel.login();
    }
  }
}

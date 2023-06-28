import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import LoginModel from './login.model';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, LoginModel],
  imports: [],
  exports: [LoginService],
})
export class LoginModule {}

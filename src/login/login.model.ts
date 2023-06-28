import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class LoginModel {
  constructor(@Inject('prisma') private prisma: PrismaClient) {}

  public async login() {
    return await this.prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@email.com',
        password: 'alice123',
      },
    });
  }
}

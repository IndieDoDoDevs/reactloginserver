import { DynamicModule, Module, Provider, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({})
export class PrismaModule {
  static register(): DynamicModule {
    const prisma = new PrismaClient();

    const Prisma: Provider = {
      provide: 'prisma',
      useValue: prisma,
    };

    return {
      module: PrismaModule,
      providers: [Prisma],
      exports: [Prisma],
    };
  }
}

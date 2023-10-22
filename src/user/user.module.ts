import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'prisma/prisma.moudule';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}

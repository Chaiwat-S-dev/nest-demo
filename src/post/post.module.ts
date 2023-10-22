import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from 'prisma/prisma.moudule';

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}

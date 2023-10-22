import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from 'prisma/prisma.moudule';
import { PostRepository } from './repository/post.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [PostRepository, PostService],
  exports: [PostService],
})
export class PostModule {}
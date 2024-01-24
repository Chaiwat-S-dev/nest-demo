import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post as PostModel } from '@prisma/client'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postService.createPost(createPostDto)
  }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postService.getPosts()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
    return this.postService.getPost(id)
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto): Promise<PostModel> {
    return this.postService.updatePost(id, updatePostDto)
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
    return this.postService.deletePost(id)
  }
}

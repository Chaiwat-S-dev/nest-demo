import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostRepository } from './repository/post.repository'
import { Post as PostModel } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(
    private repository: PostRepository,
    @Inject("CACHE_MANAGER") private cacheService: Cache,
  ) {}
  
  async createPost(data: CreatePostDto) {
    const post = await this.repository.create(data)
    this.cacheService.set(`post_${post.id}`, post, 30)
    return post
  }

  async getPost(id: number) {
    let post = await this.cacheService.get<PostModel>(`post_${id}`);
    if (!post) {
      post = await this.repository.findOne({ id })
      this.cacheService.set(`post_${post.id}`, post, 30)
    }
    return post
  }

  async getPosts() {
    const posts = await this.repository.findAll({})
    return posts
  }

  async updatePost(id: number, data: UpdatePostDto) {
    const post = await this.repository.update({ where: { id: +id }, data })
    this.cacheService.set(`post_${post.id}`, post, 30)
    return post
  }

  async deletePost(id: number) {
    const post = await this.repository.remove({ id })
    this.cacheService.del(`post_${id}`)
    return post
  }
}
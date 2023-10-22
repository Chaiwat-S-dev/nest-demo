import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto'
import { PostRepository } from './repository/post.repository';

@Injectable()
export class PostService {
  constructor(private repository: PostRepository) {}
  
  async createPost(data: CreatePostDto) {
    const post = await this.repository.create(data);
    return post
  }

  async getPost(id: number) {
    const post = await this.repository.findOne({ id });
    return post;
  }

  async getPosts() {
    const posts = await this.repository.findAll({});
    return posts;
  }

  async updatePost(id: number, data: UpdatePostDto) {
    const post = await this.repository.update({ where: { id: +id }, data });
    return post;
  }

  async deletePost(id: number) {
    const post = await this.repository.remove({ id });
    return post;
  }
}
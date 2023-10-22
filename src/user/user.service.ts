import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}
  
  async createUser(data: CreateUserDto) {
    const user = await this.repository.create(data);
    return user
  }

  async getUser(id: number) {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async getUsers() {
    const users = await this.repository.findAll({});
    return users;
  }

  async updateUser(id: number, data: UpdateUserDto) {
    const user = await this.repository.update({ where: { id: +id }, data });
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.repository.remove({ id });
    return user;
  }
}
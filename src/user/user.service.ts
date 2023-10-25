import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserRepository } from './repository/user.repository'
import { User as UserModel } from '@prisma/client'

@Injectable()
export class UserService {
  constructor(
    private repository: UserRepository,
    @Inject("CACHE_MANAGER") private cacheService: Cache,
  ) {}
  
  async createUser(data: CreateUserDto) {
    const user = await this.repository.create(data)
    this.cacheService.set(`user_${user.id}`, user, 30)
    return user
  }

  async getUser(id: number) {
    let user = await this.cacheService.get<UserModel>(`user_${id}`)
    if (!user) {
      user = await this.repository.findOne({ id })
      this.cacheService.set(`user_${user.id}`, user, 30)
    }
    return user
  }

  async getUsers() {
    const users = await this.repository.findAll({})
    return users
  }

  async updateUser(id: number, data: UpdateUserDto) {
    const user = await this.repository.update({ where: { id: +id }, data })
    this.cacheService.set(`user_${user.id}`, user, 30)
    return user
  }

  async deleteUser(id: number) {
    const user = await this.repository.remove({ id })
    this.cacheService.del(`user_${id}`)
    return user
  }
}
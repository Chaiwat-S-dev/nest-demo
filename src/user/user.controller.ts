import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User as UserModel } from '@prisma/client'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(createUserDto)
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.getUsers()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.userService.getUser(id)
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserModel> {
    return this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.userService.deleteUser(id)
  }
}

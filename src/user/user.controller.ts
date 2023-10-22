import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel, Post as PostModel, Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: Prisma.UserCreateInput): Promise<UserModel> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserModel> {
    return this.userService.findOne({id: Number(id)});
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserModel> {
    return this.userService.update({where: {id: Number(id)}, data: updateUserDto});
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserModel> {
    return this.userService.remove({id: Number(id)});
  }
}

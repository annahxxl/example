import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async add(@Body() body: User): Promise<User[]> {
    return this.usersService.add(body);
  }

  @Delete(':id')
  async remove(@Param() id: number): Promise<User[]> {
    return this.usersService.remove(id);
  }
}

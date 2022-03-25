import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ order: { id: -1 } });
  }

  async add(body): Promise<User[]> {
    await this.usersRepository.save(body);
    return this.findAll();
  }

  async remove(id: number): Promise<User[]> {
    await this.usersRepository.delete(id);
    return this.findAll();
  }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { User, CreateUserDto, UpdateUserDto, Game, Games } from '@app/common';
import { randomUUID } from 'crypto';
@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];
  onModuleInit() {
    for (let i = 0; i <= 100; i++) {
      this.create({ username: randomUUID(), password: randomUUID() });
    }
  }
  create(createUserDto: CreateUserDto) {
    const user: User = {
      ...createUserDto,
      games: { games: [] },
      id: randomUUID(),
    };
    this.users.push();
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

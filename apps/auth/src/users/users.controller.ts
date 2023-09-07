import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  UsersServiceController,
  CreateUserDto,
  UpdateUserDto,
  FindOneUserDto,
} from '@app/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  CreateUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  FindAllUsers() {
    return this.usersService.findAll();
  }

  FindOneUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(parseInt(findOneUserDto.id));
  }

  UpdateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(parseInt(updateUserDto.id), updateUserDto);
  }

  RemoveUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(parseInt(findOneUserDto.id));
  }
  QueryUsers();
}

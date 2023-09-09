import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto, UsersServiceClient } from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
  private userService: UsersServiceClient;

  constructor(@Inject('auth') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UsersServiceClient>('auth');
  }

  async login(loginDto: any) {}

  async register(registerDto: CreateUserDto) {}

  async verifyAccessToken(request: any): Promise<any> {}
}

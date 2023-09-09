import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private userService: any;
  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<any>('someshit');
  }

  async signup(signUpDto) {}
  async login(loginDto) {}
  async verifyToken(verifyTokenDto){}
}

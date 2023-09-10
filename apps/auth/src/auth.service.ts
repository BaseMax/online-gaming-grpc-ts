import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from '@app/common';
import { PrismaService } from '../../../libs/common/src/database/database.module';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async login(loginRequest: any) {
    const { username, password } = loginRequest;
  }

  async signup(registerDto: CreateUserDto) {
    const { username, password } = registerDto;
    const uesrFound = await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });
    
  }

  async verifyAccessToken(request: any): Promise<any> {}
}

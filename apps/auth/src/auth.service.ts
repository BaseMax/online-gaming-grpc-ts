import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RessetPasswordRequest, SignUpRequest, SignUpResponse } from '@app/common';
import { DatabaseService } from '../../../libs/common/src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private dataBaseService: DatabaseService) {}
  async login(loginRequest: any) {
    const { username, password } = loginRequest;
  }

  async signUp(SignUpRequest: SignUpRequest): Promise<any> {
    // const { username, password } = SignUpRequest;
    // const uesrFound = await this.prismaService.user.findUnique({
    //   where: {
    //     username: username,
    //   },
    // });
  }

  async verifyAccessToken(request: any): Promise<any> {}

  async ressetPassword(request: RessetPasswordRequest): Promise<any> {}
}

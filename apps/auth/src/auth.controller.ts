import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersServiceControllerMethods } from '@app/common';

@UsersServiceControllerMethods()
@UseInterceptors()
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(request: any) {
    return this.authService.login(request);
  }

  signup(request: any) {
    return this.authService.register(request);
  }

  verify(request: any) {
    return this.authService.verifyAccessToken(request);
  }
}

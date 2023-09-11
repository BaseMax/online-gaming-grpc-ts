import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthServiceControllerMethods } from '@app/common';
// import { UsersServiceControllerMethods } from '@app/common';

@UseInterceptors()
@AuthServiceControllerMethods()
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(request: any) {
    // return this.authService.login(request);
  }

  signUp(request: any) {
    // return this.authService.signup(request);
  }

  verify(request: any) {
    // return this.authService.verifyAccessToken(request);
  }

  ressetPassword(request: any) {}
}

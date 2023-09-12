import { Controller, Get, UseInterceptors, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthServiceControllerMethods } from '@app/common';
import { ExceptionFilter } from '@app/common';
// import { UsersServiceControllerMethods } from '@app/common';

@UseInterceptors()
@AuthServiceControllerMethods()
@Controller()
@UseFilters(new ExceptionFilter())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(request: any) {
    return this.authService.login(request);
  }

  signUp(request: any) {
    return this.authService.signUp(request);
  }

  ressetPassword(request: any) {
    return this.authService.ressetPassword(request);
  }

  verify(request: any) {}
}

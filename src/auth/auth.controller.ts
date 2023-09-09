import { Controller, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login() {
    return this.authService.login({});
  }

  signUp() {
    return this.authService.signup({});
  }

  verifyAccess() {
    return this.authService.verifyToken({});
  }
}

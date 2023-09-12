import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignUpDto } from './dto';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('auth')
@UseInterceptors(GrpcToHttpInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: SignUpDto) {
    return this.authService.register(registerDto);
  }
}

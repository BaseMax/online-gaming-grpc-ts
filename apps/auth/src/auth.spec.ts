// userService.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../../../libs/common/src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
const mockJwtModule = JwtModule.register({
  secret: 'secret for grpc game project', // Replace with your secret key
});

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, mockJwtModule],
      providers: [AuthService],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user by ID', async () => {
    const userSignUpDto = {
      username: 'pooyaparham3',
      password: '123321pp',
    };
    const user = await service.signUp(userSignUpDto);
    console.log('ussser: ', user);
    expect(user).toBeDefined();
    // expect(user.id).toBe(userId);
  });
});

// userService.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../../../libs/common/src/database/database.module';
import { DatabaseService } from '../../../libs/common/src/database/database.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

const mockJwtModule = JwtModule.register({
  secret: 'secret for grpc game project', // Replace with your secret key
});

const mockConfigModule = ConfigModule.forRoot({
  isGlobal: true,
});

describe('AuthService', () => {
  let service: AuthService;
  let DbService: DatabaseService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, mockJwtModule, mockConfigModule],
      providers: [AuthService, DatabaseService],
    }).compile();
    service = module.get<AuthService>(AuthService);
    DbService = module.get<DatabaseService>(DatabaseService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user and return token and username', async () => {
    const userSignUpDto = {
      username: 'pooya',
      password: '123321pp',
    };
    const user = await service.signUp(userSignUpDto);
    expect(user).toBeDefined();
    expect(user.token).toBeDefined();
    expect(user.username).toBe(userSignUpDto.username);
  });

  it('should login a user and return token and username', async () => {
    const userLoginDto = {
      username: 'pooya',
      password: '123321pp',
    };
    const user = await service.login(userLoginDto);
    expect(user).toBeDefined();
    expect(user.token).toBeDefined();
    expect(user.username).toBe(userLoginDto.username);
  });

  it('should resset a users password and return token and username ', async () => {
    const userRessetPasswordDto = {
      username: 'pooya',
      password: '123321pp',
      newPassword: '321123pp',
      newPasswordRepeat: '321123pp',
    };
    const user = await service.ressetPassword(userRessetPasswordDto);
    expect(user).toBeDefined();
    expect(user.token).toBeDefined();
    expect(user.username).toBe(userRessetPasswordDto.username);
  });

  afterAll(async () => {
    DbService.game.deleteMany();
    DbService.user.deleteMany();
  });
});

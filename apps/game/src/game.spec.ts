// userService.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { AuthService } from '../../../apps/auth/src/auth.service';
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

describe('GameService', () => {
  let service: GameService;
  let authService: AuthService;
  let DbService: DatabaseService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, mockJwtModule, mockConfigModule],
      providers: [GameService, DatabaseService, AuthService],
    }).compile();
    service = module.get<GameService>(GameService);
    authService = module.get<AuthService>(AuthService);
    DbService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a game', async () => {
    const userSignUpDto = {
      username: 'jafar',
      password: '123321pp',
    };
    const user = await authService.signUp(userSignUpDto);
    const userWithId = await DbService.user.findUnique({
      where: {
        username: user.username,
      },
    });
    const createGameDto = {
      name: 'mysocialgame',
      maxMembers: 4,
      status: 'created',
      creator: userWithId.id,
    };
    const game = await service.CreateGame(createGameDto);
    expect(game).toBeDefined();
    expect(game.name).toBeDefined();
    expect(game.name).toBe(createGameDto.name);
    expect(game.status).toBe(createGameDto.status);
  });

  it('should find a uniquely game based on its id', async () => {
    const userSignUpDto = {
      username: 'mohsen',
      password: '123321pp',
    };
    const user = await authService.signUp(userSignUpDto);
    const userWithId = await DbService.user.findUnique({
      where: {
        username: user.username,
      },
    });
    const createGameDto = {
      name: 'mysocialgame',
      maxMembers: 4,
      status: 'created',
      creator: userWithId.id,
    };
    const game = await service.CreateGame(createGameDto);
    const gameWithId = await DbService.game.findFirst({
      where: {
        name: createGameDto.name,
      },
    });
    const gameFound = await service.FindOneGame({
      id: gameWithId.id.toString(),
    });
    expect(gameFound).toBeDefined();
    expect(gameFound.name).toBeDefined();
  });

  it('should start a game successfuly based on correct inputs', async () => {
    const userSignUpDto = {
      username: 'reza',
      password: '123321pp',
    };
    const user = await authService.signUp(userSignUpDto);
    const userWithId = await DbService.user.findUnique({
      where: {
        username: user.username,
      },
    });
    const createGameDto = {
      name: 'netherlandoffice',
      maxMembers: 4,
      status: 'created',
      creator: userWithId.id,
    };
    const game = await service.CreateGame(createGameDto);
    const gameWithId = await DbService.game.findFirst({
      where: {
        name: createGameDto.name,
      },
    });
    const startGameDto = {
      creator: userWithId.id.toString(),
      gameId: gameWithId.id.toString(),
    };
    const startedGame = await service.StartGame(startGameDto);
    expect(startedGame).toBeDefined();
    expect(startedGame.maxMembers).toBeDefined();
    expect(startedGame.maxMembers).toBe(createGameDto.maxMembers);
    expect(startedGame.status).toBe('started');
  });

  afterAll(async () => {});
});

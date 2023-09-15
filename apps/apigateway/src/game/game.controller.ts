import {
  Controller,
  UseInterceptors,
  UseFilters,
  Post,
  Get,
  Body,
} from '@nestjs/common';
import { ExceptionFilter } from '@app/common';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';
import { GameService } from './game.service';
import {
  CreateGametDto,
  FindOneDto,
  StartGameDto,
  AddUserDto,
  CollectPointDto,
  GameFinishDto,
  PlayerLeftDto,
  AvailableGameDto,
} from './dto';

@Controller('game')
@UseInterceptors(GrpcToHttpInterceptor)
@UseFilters(new ExceptionFilter())
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @Post('create-game')
  async createGame(@Body() payload: CreateGametDto) {
    return this.gameService.createGame(payload);
  }

  @Get(':gameID')
  async finOneGame(@Body() payload: FindOneDto) {
    return this.gameService.findOneGame(payload);
  }

  @Post('start-game')
  async startGame(@Body() payload: StartGameDto) {
    return this.gameService.startGame(payload);
  }

  @Post('add-palyer')
  async addUserToGame(@Body() payload: AddUserDto) {
    return this.gameService.addUserToGame(payload);
  }

  @Post('collect-point')
  async collectPoint(@Body() payload: CollectPointDto) {
    return this.gameService.collectPoint(payload);
  }

  @Get('finish-game-result')
  async finishGameResult(@Body() payload: GameFinishDto) {
    return this.gameService.gameFinishResults(payload);
  }

  @Post('player-left-game')
  async playerLeftGame(@Body() payload: PlayerLeftDto) {
    return this.gameService.playerLeftGame(payload);
  }

  @Get('available-games')
  async listAvailableGame(@Body() payload: AvailableGameDto) {
    return this.gameService.listAvailableGames(payload);
  }
}

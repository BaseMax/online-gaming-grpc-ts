import { Controller, UseInterceptors } from '@nestjs/common';
import { GameService } from './game.service';
import { GameServiceControllerMethods } from '@app/common';
import {
  CreateGameRequest,
  CreateGameResponse,
  FindOneGameRequest,
  FindOneGameResponse,
  StartGameRequest,
  StartGameResponse,
  AddUserToGameRequest,
  AddUserToGameResponse,
} from '@app/common';
@UseInterceptors()
@GameServiceControllerMethods()
@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}
  createGame(request: CreateGameRequest): Promise<CreateGameResponse> {
    return this.gameService.CreateGame(request);
  }
  findOneGame(request: FindOneGameRequest): Promise<FindOneGameResponse> {
    return this.gameService.FindOneGame(request);
  }
  startGame(request: StartGameRequest): Promise<StartGameResponse> {
    return this.gameService.StartGame(request);
  }
  addUserToGame(request: AddUserToGameRequest): Promise<AddUserToGameResponse> {
    return this.gameService.addUserToGame(request);
  }
}

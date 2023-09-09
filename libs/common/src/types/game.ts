/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackageName = 'game';

export interface Game {
  id: string;
  name: string;
  started: boolean;
}

export interface Games {
  games: Game[];
}

export interface CreateGameDto {}

export interface FindOneGameDto {}

export interface StartGame {}

export interface AddUserToGameDto {}

export interface StartGameDto {}

export const GAME_PACKAGE_NAME = 'game';

export interface GameServiceClient {
  createGame(request: CreateGameDto): Observable<Game>;

  findOneGame(request: FindOneGameDto): Observable<Game>;

  startGame(request: StartGameDto): Observable<Game>;

  addUserToGame(request: AddUserToGameDto): Observable<Game>;
}

export interface GameServiceController {
  createGame(request: CreateGameDto): Promise<Game> | Observable<Game> | Game;

  findOneGame(request: FindOneGameDto): Promise<Game> | Observable<Game> | Game;

  startGame(request: StartGameDto): Promise<Game> | Observable<Game> | Game;

  addUserToGame(
    request: AddUserToGameDto,
  ): Promise<Game> | Observable<Game> | Game;
}

export function GameServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createGame',
      'findAllGames',
      'findOneGame',
      'startGame',
      'addUserToGame',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('GameService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = ['listAvailableGames'];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('GameService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const GAME_SERVICE_NAME = 'GameService';

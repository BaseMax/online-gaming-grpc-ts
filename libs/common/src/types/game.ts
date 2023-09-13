/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackageGame = 'game';

export interface Game {
  id: string;
  name: string;
  started: boolean;
}

export interface CreateGameRequest {
  name: string;
  maxMembers: number;
  status: string;
  creator: number;
}

export interface CreateGameResponse {
  name: string;
  status: string;
}

export interface FindOneGameRequest {
  id: string;
}

export interface FindOneGameResponse {
  name: string;
  status: string;
}

export interface StartGameRequest {
  creator: string;
  gameId: string;
}

export interface StartGameResponse {
  id: number;
}

export interface AddUserToGameRequest {
  userToBeAdded: number;
  gameId: number;
  creatorId: number;
}

export interface AddUserToGameResponse {
  name: string;
  status: string;
}

export interface ListAvailableGamesRequest {}

export interface ListAvailableGamesResponse {}

export interface Games {
  games: Game[];
}

export interface PaginationDto {
  page: number;
  skip: number;
}

export const GAME_PACKAGE_NAME = 'game';

export interface GameServiceClient {
  createGame(request: CreateGameRequest): Observable<CreateGameResponse>;

  findOneGame(request: FindOneGameRequest): Observable<FindOneGameResponse>;

  startGame(request: StartGameRequest): Observable<StartGameResponse>;

  addUserToGame(
    request: AddUserToGameRequest,
  ): Observable<AddUserToGameResponse>;

  listAvailableGames(request: Observable<PaginationDto>): Observable<Games>;
}

export interface GameServiceController {
  createGame(
    request: CreateGameRequest,
  ):
    | Promise<CreateGameResponse>
    | Observable<CreateGameResponse>
    | CreateGameResponse;

  findOneGame(
    request: FindOneGameRequest,
  ):
    | Promise<FindOneGameResponse>
    | Observable<FindOneGameResponse>
    | FindOneGameResponse;

  startGame(
    request: StartGameRequest,
  ):
    | Promise<StartGameResponse>
    | Observable<StartGameResponse>
    | StartGameResponse;

  addUserToGame(
    request: AddUserToGameRequest,
  ):
    | Promise<AddUserToGameResponse>
    | Observable<AddUserToGameResponse>
    | AddUserToGameResponse;

  listAvailableGames(request: Observable<PaginationDto>): Observable<Games>;
}

export function GameServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createGame',
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

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "game";

export interface Game {
  id: string;
  name: string;
  started: boolean;
}

export interface Games {
  games: Game[];
}

export interface Empty {
}

export interface CreateGameDto {
}

export interface FindOneGameDto {
}

export interface StartGame {
}

export interface AddUserToGameDto {
}

export interface StartGameDto {
}

export interface PaginationDto {
  page: number;
  skip: number;
}

export const GAME_PACKAGE_NAME = "game";

export interface GameServiceClient {
  createGame(request: CreateGameDto): Observable<Game>;

  findAllGames(request: Empty): Observable<Games>;

  findOneGame(request: FindOneGameDto): Observable<Game>;

  startGame(request: StartGameDto): Observable<Game>;

  addUserToGame(request: AddUserToGameDto): Observable<Game>;

  listAvailableGames(request: Observable<PaginationDto>): Observable<Games>;
}

export interface GameServiceController {
  createGame(request: CreateGameDto): Promise<Game> | Observable<Game> | Game;

  findAllGames(request: Empty): Promise<Games> | Observable<Games> | Games;

  findOneGame(request: FindOneGameDto): Promise<Game> | Observable<Game> | Game;

  startGame(request: StartGameDto): Promise<Game> | Observable<Game> | Game;

  addUserToGame(request: AddUserToGameDto): Promise<Game> | Observable<Game> | Game;

  listAvailableGames(request: Observable<PaginationDto>): Observable<Games>;
}

export function GameServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createGame", "findAllGames", "findOneGame", "startGame", "addUserToGame"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("GameService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["listAvailableGames"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("GameService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const GAME_SERVICE_NAME = "GameService";

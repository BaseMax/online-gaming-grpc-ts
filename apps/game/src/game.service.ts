import { Injectable } from '@nestjs/common';
import {
  GrpcNotFoundException,
  GrpcAlreadyExistsException,
  GrpcInvalidArgumentException,
} from 'nestjs-grpc-exceptions';
import { DatabaseService } from '../../../libs/common/src/database/database.service';
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

@Injectable()
export class GameService {
  constructor(private databaseService: DatabaseService) {}

  async CreateGame(payload: CreateGameRequest): Promise<any> {
    const creatorFound = await this.databaseService.user.findUnique({
      where: {
        id: payload.creator,
      },
    });
    if (!creatorFound) {
      throw new GrpcNotFoundException('there is no user with this id');
    }
    const createdGame = await this.databaseService.game.create({
      data: {
        ...payload,
      },
    });
    return createdGame;
  }

  async FindOneGame(payload: FindOneGameRequest): Promise<any> {
    const foundGame = await this.databaseService.game.findUnique({
      where: {
        id: +payload.id,
      },
    });
    if (!foundGame) {
      throw new GrpcNotFoundException('there is no user with this id');
    }
    return foundGame;
  }

  async StartGame(payload: StartGameRequest): Promise<any> {
    const creatorFound = await this.databaseService.user.findUnique({
      where: {
        id: +payload.creator,
      },
    });
    if (!creatorFound) {
      throw new GrpcNotFoundException('there is no user with this id');
    }
    const gameFound = await this.databaseService.game.findUnique({
      where: {
        id: +payload.gameId,
      },
    });
    if (!gameFound) {
      throw new GrpcNotFoundException('there is no game with this id');
    }
    const gameUpdated = await this.databaseService.game.update({
      where: {
        id: +payload.gameId,
      },
      data: {
        status: 'started',
      },
    });
    return gameUpdated;
  }

  async addUserToGame(payload: AddUserToGameRequest): Promise<any> {
    const creatorFound = await this.databaseService.user.findUnique({
      where: {
        id: +payload.creatorId,
      },
    });
    if (!creatorFound) {
      throw new GrpcNotFoundException('there is no user with this id');
    }
    const memberFound = await this.databaseService.user.findUnique({
      where: {
        id: +payload.creatorId,
      },
    });
    if (!memberFound) {
      throw new GrpcNotFoundException('there is no member with this id');
    }
    const gameFound = await this.databaseService.game.findUnique({
      where: {
        id: +payload.gameId,
      },
    });
    if (!gameFound) {
      throw new GrpcNotFoundException('there is no game with this id');
    }
    const gameUpdated = await this.databaseService.game.update({
      where: {
        id: +payload.gameId,
      },
      data: {
        members: {
          connect: {
            id: +payload.userToBeAdded,
          },
        },
      },
    });
    return gameUpdated;
  }
}

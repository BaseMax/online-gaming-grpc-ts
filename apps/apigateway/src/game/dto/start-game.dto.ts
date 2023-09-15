import {
  GameFinishResultsRequest,
  PlayerLeftGameRequest,
  StartGameRequest,
} from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StartGameDto implements StartGameRequest {
  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsString()
  @IsNotEmpty()
  creator: string;
}

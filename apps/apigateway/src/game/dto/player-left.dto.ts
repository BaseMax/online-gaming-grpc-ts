import { GameFinishResultsRequest, PlayerLeftGameRequest } from '@app/common';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PlayerLeftDto implements PlayerLeftGameRequest {
  @IsNumber()
  @IsNotEmpty()
  gameID: number;

  @IsNumber()
  @IsNotEmpty()
  playerID: number;
}

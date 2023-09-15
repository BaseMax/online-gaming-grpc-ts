import { GameFinishResultsRequest } from '@app/common';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GameFinishDto implements GameFinishResultsRequest {
  @IsNumber()
  @IsNotEmpty()
  gameID: number;
}

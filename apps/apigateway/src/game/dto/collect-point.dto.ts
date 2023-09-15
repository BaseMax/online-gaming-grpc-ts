import { CollectPointRequest } from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CollectPointDto implements CollectPointRequest {
  @IsNumber()
  @IsNotEmpty()
  playerID: number;

  @IsNumber()
  @IsNotEmpty()
  gameID: number;

  @IsNumber()
  @IsNotEmpty()
  pointCollected: number;
}

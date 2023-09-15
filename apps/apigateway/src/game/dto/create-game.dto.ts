import { CreateGameRequest } from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGametDto implements CreateGameRequest {
  @IsNumber()
  @IsNotEmpty()
  creator: number;

  @IsNumber()
  @IsNotEmpty()
  maxMembers: number;

  @IsNumber()
  @IsNotEmpty()
  pointCollected: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}

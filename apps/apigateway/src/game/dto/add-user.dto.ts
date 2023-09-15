import { AddUserToGameRequest } from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddUserDto implements AddUserToGameRequest {
  @IsNumber()
  @IsNotEmpty()
  userToBeAdded: number;

  @IsNumber()
  @IsNotEmpty()
  gameId: number;

  @IsNumber()
  @IsNotEmpty()
  creatorId: number;
}

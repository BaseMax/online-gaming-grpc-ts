import { ListAvailableGamesRequest } from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AvailableGameDto implements ListAvailableGamesRequest {
  @IsNumber()
  @IsNotEmpty()
  userID: number;
}

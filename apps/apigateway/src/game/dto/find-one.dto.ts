import { FindOneGameRequest } from '@app/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindOneDto implements FindOneGameRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}

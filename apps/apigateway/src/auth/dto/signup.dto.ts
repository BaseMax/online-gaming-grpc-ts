import { SignUpRequest } from '@app/common';
import { IsString, IsNotEmpty } from 'class-validator';

export class SignUpDto implements SignUpRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

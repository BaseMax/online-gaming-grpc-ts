import { LoginReqeust } from '@app/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto implements LoginReqeust {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

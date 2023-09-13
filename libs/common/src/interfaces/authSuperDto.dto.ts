import { IsString, IsNotEmpty } from 'class-validator';

export class AuthSuperDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

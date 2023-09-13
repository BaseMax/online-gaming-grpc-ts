import { RessetPasswordRequest, AuthSuperDto } from '@app/common';
import { IsString, IsNotEmpty } from 'class-validator';

export class RessetPasswordDto
  extends AuthSuperDto
  implements RessetPasswordRequest
{
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  newPasswordRepeat: string;
}

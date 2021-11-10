import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Informe seu nome' })
  @MinLength(2, { message: 'Informe um valor maior que 2' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Voce digitou seu email de forma incorreta' })
  @IsString()
  email: string;

  @Length(6, 12)
  @IsString({ message: 'Informe uma senha entre 6 e 12 letras' })
  password: string;

  @Length(6, 12)
  @IsString({ message: 'Confirme sua senha' })
  passwordConfirmation: string;
}

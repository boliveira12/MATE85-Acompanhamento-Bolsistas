import { IsString, IsEmail, IsUrl, IsDate } from "class-validator"

export class StudentDTO {
  
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly course: string;

  @IsUrl()
  readonly link_lattes: string;

  @IsString()
  readonly advisor_name: string;

  @IsDate()
  readonly enrollment_date_pgcomp: Date;
}

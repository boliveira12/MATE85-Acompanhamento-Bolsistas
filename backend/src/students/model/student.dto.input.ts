import { Type } from 'class-transformer';
import { IsString, IsEmail, IsUrl, IsDate, IsNumber } from 'class-validator';

export class CreateStudentDTO {
  constructor(
    tax_id: string,
    enrolment_number: string,
    name: string,
    email: string,
    course: string,
    link_lattes: string,
    advisor_id: number,
    enrollment_date_pgcomp: Date,
    phone_number: string,
    password: string,
    role: string,
  ) {
    this.tax_id = tax_id;
    this.enrolment_number = enrolment_number;
    this.name = name;
    this.email = email;
    this.course = course;
    this.link_lattes = link_lattes;
    this.advisor_id = advisor_id;
    this.enrollment_date_pgcomp = enrollment_date_pgcomp;
    this.phone_number = phone_number;
    this.password = password;
    this.role = role;
  }

  @IsString()
  readonly tax_id: string;

  @IsString()
  readonly enrolment_number: string;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly course: string;

  @IsUrl()
  readonly link_lattes: string;

  @IsNumber()
  readonly advisor_id: number;

  @Type(() => Date)
  @IsDate()
  readonly enrollment_date_pgcomp: Date;

  @IsString()
  readonly phone_number: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly role: string;
}

export class ResponseStudentDTO {
  constructor(
    id: number,
    tax_id: string,
    enrolment_number: string,
    name: string,
    email: string,
    course: string,
    link_lattes: string,
    advisor_id: number,
    enrollment_date_pgcomp: Date,
    phone_number: string,
    role: string,
  ) {
    this.id = id;
    this.tax_id = tax_id;
    this.enrolment_number = enrolment_number;
    this.name = name;
    this.email = email;
    this.course = course;
    this.link_lattes = link_lattes;
    this.advisor_id = advisor_id;
    this.enrollment_date_pgcomp = enrollment_date_pgcomp;
    this.phone_number = phone_number;
    this.role = role;
  }

  readonly id: number;

  readonly tax_id: string;

  readonly enrolment_number: string;

  readonly name: string;

  readonly email: string;

  readonly course: string;

  readonly link_lattes: string;

  readonly advisor_id: number;

  readonly enrollment_date_pgcomp: Date;

  readonly phone_number: string;

  readonly role: string;
}

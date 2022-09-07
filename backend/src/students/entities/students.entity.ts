import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateStudentDTO, ResponseStudentDTO } from '../model/student.dto.input';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 14, nullable: false, unique: true })
  tax_id: string;

  @Column({ length: 9, nullable: false, unique: true })
  enrolment_number: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  course: string;

  @Column({ nullable: false })
  link_lattes: string;

  @Column()
  advisor_id: number;

  @Column({ nullable: false })
  enrollment_date_pgcomp: Date;

  @Column({ length: 11, nullable: false })
  phone_number: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true, default: 'STUDENT' })
  role: string;

  toStudent(): ResponseStudentDTO {
    return new ResponseStudentDTO(
      this.id,
      this.tax_id,
      this.enrolment_number,
      this.name,
      this.email,
      this.course,
      this.link_lattes,
      this.advisor_id,
      this.enrollment_date_pgcomp,
      this.phone_number,
      this.role,
    );
  }
}

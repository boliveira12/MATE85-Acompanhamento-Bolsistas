import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registry: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  course: string;

  @Column()
  link_lattes: string;

  @Column()
  advisor_name: string;

  @Column()
  enrollment_date_pgcomp: Date;
}

import { StudentEntity } from '../../students/entities/students.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({ nullable: false })
  @ManyToOne(() => StudentEntity, (student) => student.articles)
  student_id: number

  @Column({ nullable: false }) title: string
  @Column({ nullable: false }) publication_date: Date
  @Column({ nullable: false }) publication_place: string
  @Column({ nullable: false }) doi_link: string
}

import { StudentEntity } from '../../students/entities/students.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ResponseArticleDTO } from '../dto/response-article.dto'

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

export function toArticleResponseDTO(
  article: ArticleEntity
): ResponseArticleDTO {
  return new ResponseArticleDTO(
    article.student_id,
    article.title,
    article.publication_date,
    article.publication_place,
    article.doi_link
  )
}

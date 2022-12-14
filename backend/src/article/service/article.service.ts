import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateArticleDto } from '../dto/create-article.dto'
import { ResponseArticleDTO } from '../dto/response-article.dto'
import { UpdateArticleDto } from '../dto/update-article.dto'
import { ArticleEntity, toArticleResponseDTO } from '../entities/article.entity'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.save(createArticleDto)
  }

  async findAll(): Promise<ResponseArticleDTO[]> {
    const articles = await this.articleRepository.find()
    return articles.map((article) => toArticleResponseDTO(article))
  }

  async findOne(id: number): Promise<ResponseArticleDTO> {
    const article = await this.articleRepository.findOneBy({ id })
    if (!article) throw new NotFoundException('Article not found')
    return article
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article` //TODO
  }

  async remove(id: number) {
    const removed = await this.articleRepository.delete(id)
    if (removed.affected === 0) {
      throw new NotFoundException('Article not found')
    }
    return 'Article deleted'
  }
}

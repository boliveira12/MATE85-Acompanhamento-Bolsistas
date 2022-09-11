import { PartialType } from '@nestjs/mapped-types'
import { CreateArticleDto } from './create-article.dto'

export class ResponseArticleDTO extends PartialType(CreateArticleDto) {}

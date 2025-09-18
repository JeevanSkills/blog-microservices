import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';

import { Blog } from './schemas/blog.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BlogsRepository extends AbstractRepository<Blog> {
  protected readonly logger = new Logger(BlogsRepository.name);

  constructor(
    @InjectModel(Blog.name) blogModel: Model<Blog>,
    @InjectConnection() connection: Connection,
  ) {
    super(blogModel, connection);
  }
}

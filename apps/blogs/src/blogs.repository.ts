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

  async delete(filterQuery: any): Promise<Blog> {
    const document = await this.model.findOneAndDelete(filterQuery, { lean: true });
    
    if (!document) {
      this.logger.warn('Document not found with filterQuery:', filterQuery);
      throw new Error('Document not found.');
    }

    return document as unknown as Blog;
  }
}

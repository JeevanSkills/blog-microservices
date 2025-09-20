import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './schemas/blog.schema';

@Injectable()
export class BlogsService {
  constructor(private readonly blogsRepository: BlogsRepository) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsRepository.create(createBlogDto);
  }

  async findAll(): Promise<Blog[]> {
    return this.blogsRepository.find({});
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogsRepository.findOne({ _id: id });
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return this.blogsRepository.findOneAndUpdate(
      { _id: id },
      updateBlogDto,
    );
  }

  async remove(id: string): Promise<Blog> {
    return this.blogsRepository.delete({ _id: id });
  }
}

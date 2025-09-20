import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id.pipe';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './schemas/blog.schema';

@Controller('blogs')
@UsePipes(new ValidationPipe({ transform: true }))
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string): Promise<Blog> {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string, 
    @Body() updateBlogDto: UpdateBlogDto
  ): Promise<Blog> {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string): Promise<Blog> {
    return this.blogsService.remove(id);
  }
}

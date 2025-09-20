import { Test, TestingModule } from '@nestjs/testing';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './schemas/blog.schema';

describe('BlogsController', () => {
  let blogsController: BlogsController;
  let blogsService: BlogsService;

  const mockBlog: Blog = {
    _id: '507f1f77bcf86cd799439011' as any,
    title: 'Test Blog',
    content: 'This is a test blog content',
    userId: '507f1f77bcf86cd799439012',
    imageUrl: 'https://example.com/image.jpg',
  };

  beforeEach(async () => {
    const mockBlogsService = {
      create: jest.fn().mockResolvedValue(mockBlog),
      findAll: jest.fn().mockResolvedValue([mockBlog]),
      findOne: jest.fn().mockResolvedValue(mockBlog),
      update: jest.fn().mockResolvedValue(mockBlog),
      remove: jest.fn().mockResolvedValue(mockBlog),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogsController],
      providers: [
        {
          provide: BlogsService,
          useValue: mockBlogsService,
        },
      ],
    }).compile();

    blogsController = app.get<BlogsController>(BlogsController);
    blogsService = app.get<BlogsService>(BlogsService);
  });

  describe('create', () => {
    it('should create a blog', async () => {
      const createBlogDto: CreateBlogDto = {
        title: 'Test Blog',
        content: 'This is a test blog content',
        userId: '507f1f77bcf86cd799439012',
        imageUrl: 'https://example.com/image.jpg',
      };

      const result = await blogsController.create(createBlogDto);
      expect(result).toEqual(mockBlog);
      expect(blogsService.create).toHaveBeenCalledWith(createBlogDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of blogs', async () => {
      const result = await blogsController.findAll();
      expect(result).toEqual([mockBlog]);
      expect(blogsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a blog by id', async () => {
      const result = await blogsController.findOne('507f1f77bcf86cd799439011');
      expect(result).toEqual(mockBlog);
      expect(blogsService.findOne).toHaveBeenCalledWith('507f1f77bcf86cd799439011');
    });
  });

  describe('update', () => {
    it('should update a blog', async () => {
      const updateBlogDto: UpdateBlogDto = {
        title: 'Updated Blog Title',
      };

      const result = await blogsController.update('507f1f77bcf86cd799439011', updateBlogDto);
      expect(result).toEqual(mockBlog);
      expect(blogsService.update).toHaveBeenCalledWith('507f1f77bcf86cd799439011', updateBlogDto);
    });
  });

  describe('remove', () => {
    it('should delete a blog', async () => {
      const result = await blogsController.remove('507f1f77bcf86cd799439011');
      expect(result).toEqual(mockBlog);
      expect(blogsService.remove).toHaveBeenCalledWith('507f1f77bcf86cd799439011');
    });
  });
});

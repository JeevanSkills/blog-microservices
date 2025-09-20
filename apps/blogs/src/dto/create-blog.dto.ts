import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}

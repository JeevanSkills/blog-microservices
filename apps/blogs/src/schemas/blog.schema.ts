import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({versionKey: false})
export class Blog extends AbstractDocument {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  userId: string;

  @Prop({ required: false })
  imageUrl?: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
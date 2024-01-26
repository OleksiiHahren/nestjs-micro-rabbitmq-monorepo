import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Mark } from './mark.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  user_id: string;

  @Prop({ type: Types.ObjectId, ref: () => Mark })
  mark: Mark;

  @Prop()
  comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

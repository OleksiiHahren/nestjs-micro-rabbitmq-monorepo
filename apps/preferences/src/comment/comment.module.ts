import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '../schemas/comment.schema';
import { Mark, MarkSchema } from '../schemas/mark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: Mark.name, schema: MarkSchema }
    ])
  ]
})
export class CommentModule {}

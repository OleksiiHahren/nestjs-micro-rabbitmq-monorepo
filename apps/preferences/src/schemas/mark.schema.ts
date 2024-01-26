import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarkDocument = HydratedDocument<Mark>;

@Schema()
export class Mark {
  @Prop()
  preferenceTargetId: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  mark: number;

  @Prop()
  type: 'book' | 'movie';
}
export const MarkSchema = SchemaFactory.createForClass(Mark);

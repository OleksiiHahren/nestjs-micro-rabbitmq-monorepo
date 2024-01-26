import { Module } from '@nestjs/common';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { MongodbConnectorModule } from '@app/mongodb-connector';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { Mark, MarkSchema } from './schemas/mark.schema';

const models = [
  { name: Comment.name, schema: CommentSchema },
  { name: Mark.name, schema: MarkSchema }
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_EXCHANGE: Joi.string().required(),
        RABBITMQ_DEFAULT_USER: Joi.string().required(),
        RABBITMQ_DEFAULT_PASS: Joi.string().required(),
        RABBITMQ_HOST: Joi.string().required(),
        RABBIT_MQ_PREFERENCE_QUEUE: Joi.string().required(),
        MONGODB_AUTH_SOURCE: Joi.string().required()
      }),
      envFilePath: './apps/preferences/.env'
    }),
    RabbitmqConnectorModule.register('preferences'),
    MongodbConnectorModule.register('PREFERENCES', models),
  ],
  controllers: [PreferencesController],
  providers: [PreferencesService]
})
export class PreferencesModule {}

import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { MongodbConnectorModule } from '@app/mongodb-connector';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_REVIEWS_QUEUE: Joi.string().required(),

      }),
      envFilePath: './apps/reviews/.env',
    }),
    RabbitmqConnectorModule.register({ name: 'REVIEWS' }),
    MongodbConnectorModule.register('REVIEWS')],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}

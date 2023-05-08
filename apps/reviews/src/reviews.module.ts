import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { MongodbConnectorModule } from '@app/mongodb-connector';

@Module({
  imports: [MongodbConnectorModule.register()],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}

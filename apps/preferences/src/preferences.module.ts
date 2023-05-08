import { Module } from '@nestjs/common';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { MongodbConnectorModule } from '@app/mongodb-connector';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PREFERENCE_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/preferences/.env',
    }),
    RabbitmqConnectorModule,
    MongodbConnectorModule.register(),
  ],
  controllers: [PreferencesController],
  providers: [PreferencesService],
})
export class PreferencesModule {}

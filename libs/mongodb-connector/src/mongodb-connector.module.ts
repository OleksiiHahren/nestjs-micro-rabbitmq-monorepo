import { Module, DynamicModule } from '@nestjs/common';
import { MongodbConnectorService } from './mongodb-connector.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
})
export class MongodbConnectorModule {
  static register(): DynamicModule {
    return {
      module: MongodbConnectorModule,
      imports: [
        ConfigModule,
        MongooseModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            uri: configService.get('MONGODB_URI'),
            dbName: configService.get('MONGODB_DB_NAME'),
            authSource: configService.get('MONGODB_AUTH_SOURCE'),
            user: configService.get('MONGODB_USER'),
            pass: configService.get('MONGODB_PASS'),
          }),
        }),
      ],
      exports: [MongooseModule],
    };
  }
}
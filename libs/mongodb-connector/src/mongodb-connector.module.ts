import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {ModelDefinition} from "@nestjs/mongoose/dist/interfaces";

@Module({
})
export class MongodbConnectorModule {
  static register(key: string, models: ModelDefinition[]): DynamicModule {
    return {
      module: MongodbConnectorModule,
      imports: [
        ConfigModule,
        MongooseModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            uri: configService.get('MONGODB_URI'),
            dbName: configService.get(key),
            authSource: configService.get('MONGODB_AUTH_SOURCE'),
            user: configService.get('MONGODB_USER'),
            pass: configService.get('MONGODB_PASS'),
          }),
        }),
        MongooseModule.forFeature(models)
      ],
      exports: [MongooseModule],
    };
  }
}

import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EntitySchema } from 'typeorm/entity-schema/EntitySchema';
import {MixedList} from "typeorm/common/MixedList";

@Module({})
export class PostgresqlConnectorModule {
  static register(
    entities
  ): DynamicModule {
    return {
      module: PostgresqlConnectorModule,
      imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
          useFactory: async (config: ConfigService) => ({
            type: 'postgres',
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT'),
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_NAME'),
            synchronize: true,
            entities
          }),
          inject: [ConfigService]
        })
      ],
      exports: [
          TypeOrmModule
          ]
    };
  }
}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { JwtModule } from '@nestjs/jwt';
import { PostgresqlConnectorModule } from '@app/postgresql-connector';
import { UserRepository } from './repositories/user.repository';
import { ConnectionRepository } from './repositories/connection.repository';
import { ProfileDetails } from './entities/profile-details.entity';
import { CustomRepositoryModule } from 'nestjs-typeorm-custom-repository';
import {Connection} from "./entities/connection.entity";
import {User} from "./entities/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required()
      }),
      envFilePath: './apps/users/.env'
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}`
        }
      }),
      inject: [ConfigService]
    }),
    PostgresqlConnectorModule.register([
      User,
      Connection,
      ProfileDetails
    ]),
    CustomRepositoryModule.forFeature([UserRepository, ConnectionRepository]),
    RabbitmqConnectorModule.register('users')
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

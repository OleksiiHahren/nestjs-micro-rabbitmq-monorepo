import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthValidatorService } from './auth-validator.service';
import {
  RabbitmqConnectorModule,
} from '@app/rabbitmq-connector';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [RabbitmqConnectorModule.register({ name: 'AUTH_VALIDATOR' })],
  providers: [AuthValidatorService],
  exports: [AuthValidatorService, RabbitmqConnectorModule],
})
export class AuthValidatorModule implements NestModule{

  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(cookieParser).forRoutes('*');
  }
}

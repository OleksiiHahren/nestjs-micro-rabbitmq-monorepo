import {DynamicModule, Logger, Module} from '@nestjs/common';
import { RabbitmqConnectorService } from './rabbitmq-connector.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RMQModule } from 'nestjs-rmq';

@Module({
  imports: [ConfigModule],
  providers: [RabbitmqConnectorService],
  exports: [RabbitmqConnectorService]
})
export class RabbitmqConnectorModule {
  constructor(private readonly config: ConfigService) {
    console.log(this.config.get('RABBIT_MQ_EXCHANGE'), '<--------');
  }

  static register(name): DynamicModule {
    return {
      module: RabbitmqConnectorModule,
      imports: [
        RMQModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return {
              exchangeName: configService.get('RABBIT_MQ_EXCHANGE'),
              queueName: configService.get('RABBIT_MQ_USERS_QUEUE'),
              serviceName: configService.get('RABBIT_MQ_EXCHANGE'),
              logger: Logger,
              connections: [
                {
                  login: configService.get('RABBITMQ_DEFAULT_USER'),
                  password: configService.get('RABBITMQ_DEFAULT_PASS'),
                  host: configService.get('RABBITMQ_HOST')
                }
              ]
            };
          }
        })
      ],
      exports: [RMQModule]
    };
  }
}

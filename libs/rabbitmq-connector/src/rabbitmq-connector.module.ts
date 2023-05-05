import { DynamicModule, Module } from '@nestjs/common';
import { RabbitmqConnectorService } from './rabbitmq-connector.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RabbitmqConnectorService],
  exports: [RabbitmqConnectorService],
})
export class RabbitmqConnectorModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RabbitmqConnectorModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: async (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [configService.get<string>('RABBIT_MQ_URI')],
                queue: configService.get<string>(`RABBIT_MQ_${name}_QUEUE`),
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    }
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitmqConnectorService {
  constructor(private readonly configService: ConfigService) {}

  getConfig(name: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        noAck,
        urls: [this.configService.get<string>('RABBIT_MQ_URI')],
        queue: this.configService.get<string>(`RABBIT_MQ_${name}_QUEUE`),
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }

}

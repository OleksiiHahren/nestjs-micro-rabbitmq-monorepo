import { User } from '../../../apps/users/src/entities/user.entity';

export class ConnectionCreateDto {
  consumerId: string;
  producerId: string;
  producer?: User;
  consumer?: User;
}

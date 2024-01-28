import { User } from '../../../apps/users/src/entities/user.entity';

export class UserConnectionCreateDto {
  consumerId: string;
  producerId: string;
  producer?: User;
  consumer?: User;
}

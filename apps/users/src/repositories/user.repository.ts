import { Repository } from 'typeorm';
import { EntityRepository } from 'nestjs-typeorm-custom-repository';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async createUser(user: Partial<User>): Promise<User> {
    return this.save(user);
  }

  async deleteUser(id: string) {
    return this.delete(id)
  }
}

import { Injectable } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import { UserCreateDto } from '@app/common';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';
import { UserDto } from '@app/common';
import { ProfileDetails } from './entities/profile-details.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly rmqService: RMQService,
    private readonly userRepo: UserRepository
  ) {}

  async create(dto: UserCreateDto) {
    console.log(dto, 'dto inside user micro service');
    const details = new ProfileDetails();
    const userEntity = await this.userRepo.createUser({ ...dto, details });
    return this.entityToDto(userEntity);
  }

  firstPublish() {
    return this.rmqService.send('users.create', {
      message: 'message from users service!'
    });
  }

  private entityToDto(userEntity: User): UserDto {
    return userEntity
  }
}

import { Basic } from './basic.entity';
import { Column, Entity, Index, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { UserConnectionEnum } from '@app/common';

@Entity()
@Index(['userWhoFollows'])
@Index(['userFollowed'])
export class UserConnection extends Basic {
  @Column({ type: 'date', default: new Date() })
  lastInteraction: Date;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  userWhoFollows: User;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  userFollowed: User;

  @Column({
    type: 'simple-enum',
    enum: UserConnectionEnum,
    default: 'pending'
  })
  status: UserConnectionEnum;
}

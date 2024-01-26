import { Basic } from './basic.entity';
import { Column, Entity, Index, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
@Index(['consumerUser'])
@Index(['producerUser'])
export class Connection extends Basic {
  @Column({ type: 'date', default: new Date() })
  lastInteraction: Date;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  consumerUser: User;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  producerUser: User;

  @Column({
    type: 'simple-enum',
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending'
  })
  status: 'pending' | 'accepted' | 'declined';
}

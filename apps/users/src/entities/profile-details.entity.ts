import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Basic } from './basic.entity';

@Entity()
export class ProfileDetails extends Basic {
  @OneToOne(() => User, (user: User) => user.details)
  user: User;

  @Column({ type: 'smallint', default: 0 })
  followers: number;

  @Column({ type: 'smallint', default: 0 })
  Following: number;

  @Column({ type: 'smallint', default: 0 })
  books: number;

  @Column({ type: 'smallint', default: 0 })
  movies: number;
}

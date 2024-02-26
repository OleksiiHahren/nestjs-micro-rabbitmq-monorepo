import { Column, Entity, JoinColumn, OneToOne, Unique } from 'typeorm';
import { Basic } from './basic.entity';
import { ProfileDetails } from './profile-details.entity';

@Entity()
@Unique(['email'])
export class User extends Basic {
  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, default: '' })
  icon: string;

  @Column({ nullable: false })
  email: string;

  @OneToOne(() => ProfileDetails, (details) => details.user, { cascade: true, eager: false })
  @JoinColumn()
  details: ProfileDetails;

}

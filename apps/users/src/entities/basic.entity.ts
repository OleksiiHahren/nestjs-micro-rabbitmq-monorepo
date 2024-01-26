import {
  CreateDateColumn, Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Basic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
  updated_at: Date;
}

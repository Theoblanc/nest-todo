import { BaseModel } from 'src/shared/base.model';
import { Column, Entity } from 'typeorm';

@Entity('todo')
export class Todo extends BaseModel {
  @Column()
  content: string;

  @Column({ default: false })
  checked: boolean;
}

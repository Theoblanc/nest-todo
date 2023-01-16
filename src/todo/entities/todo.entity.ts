import { BaseModel } from 'src/commons/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity('todo')
export class TodoEntity extends BaseModel {
  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;
}

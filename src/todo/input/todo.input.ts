import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('TodoItemInput')
export class TodoItemInputDTO {
  @Field()
  @IsString()
  title!: string;

  @Field()
  completed!: boolean;
}

import { Field } from '@nestjs/graphql';

export class CreateTodoDTO {
  @Field({ nullable: true })
  title: string;

  @Field()
  completed!: boolean;
}

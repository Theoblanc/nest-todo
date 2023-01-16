import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  completed;
}

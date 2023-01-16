import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDTO {
  @ApiProperty()
  @Field({ nullable: true })
  title: string;
}

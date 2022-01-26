import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  checked: boolean;
}

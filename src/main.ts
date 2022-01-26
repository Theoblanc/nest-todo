import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('description')
    .setVersion('1.0')
    .addTag('todo')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [TodoModule],
  });

  SwaggerModule.setup('api', app, document);

  const todoConfig = new DocumentBuilder()
    .setTitle('Todo Example')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('todo')
    .build();

  const toDoDocument = SwaggerModule.createDocument(app, todoConfig, {
    include: [TodoModule],
  });
  SwaggerModule.setup('api/todo', app, toDoDocument);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000, '0.0.0.0', () => {
    console.log('yeeeey');
  });
}
bootstrap();

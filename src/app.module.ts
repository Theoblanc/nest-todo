import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlConfigService } from './commons/setting';
import { TodoEntity } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';

const modules = [TodoModule];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'todo_pgdb',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'todo',
        entities: [TodoEntity],
        synchronize: true,
      }),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

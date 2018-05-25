import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      database: 'wfnetworth',
      username: 'root',
      password: 'secret',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
      migrations: [
        __dirname + '/../**/*.migration{.ts,.js}'
     ],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}

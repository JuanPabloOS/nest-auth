import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ItemsModule } from './items/items.module';
// import { AuthzModule } from './authz/authz.module';
// import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    AuthzModule,
  ],
})
export class AppModule {}

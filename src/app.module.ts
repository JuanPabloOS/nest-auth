import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ItemsModule, AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

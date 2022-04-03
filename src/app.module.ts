import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './items/config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoos)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

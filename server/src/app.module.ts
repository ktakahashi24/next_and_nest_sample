import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { CatsModule } from './cats/cars.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

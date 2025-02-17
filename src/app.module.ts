import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [ProductModule, UserModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

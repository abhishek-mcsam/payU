import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from './controlers/payment/payment.controller';
import {PaymentSevice} from './controlers/payment/payment.service';
import { PaymentSuccessController } from './controlers/paySuccess/paySuccess.controller';
import { PaySuccessService } from './controlers/paySuccess/paySuccess.services';
import { PayfailController } from './controlers/payfail/payfail.controller';
import { PayfailProvider } from './controlers/payfail/payfill.providers';

 
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '../config/.env',
    isGlobal: true,
  })],
  controllers: [AppController , PaymentController , PaymentSuccessController , PayfailController ],
  providers: [AppService , PaymentSevice , PaySuccessService , PayfailProvider],
})
export class AppModule {}

import { ListSpecificPaymentService } from '@modules/payment/service/listSpecificPayment.service';
import { CreatePaymentService } from '@modules/payment/service/createPayment.service';
import { UpdatePaymentService } from '@modules/payment/service/updatePayment.service';
import { PaymentController } from '@modules/payment/controller/payment.Controller';
import { ListOrdersPaymentService } from '@modules/payment/service/listOrdersPayment.service';
import { DatabaseModule } from '@utils/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [PaymentController],
  providers: [
    CreatePaymentService,
    UpdatePaymentService,
    ListSpecificPaymentService,
    ListOrdersPaymentService,
  ]
})

export class AppModule {}

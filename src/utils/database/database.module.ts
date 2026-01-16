import { IPaymentModel } from '@modules/payment/model/implementation-IPaymentModel/IPaymentModel';
import { PaymentModel } from '@modules/payment/model/paymentModel';
import { PrismaService } from './prisma/prismaService';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: IPaymentModel,
      useClass: PaymentModel,
    },
  ],
  exports: [IPaymentModel],
})

export class DatabaseModule {}

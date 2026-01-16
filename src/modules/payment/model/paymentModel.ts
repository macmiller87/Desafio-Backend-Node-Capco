import { IPaymentModel } from '@modules/payment/model/implementation-IPaymentModel/IPaymentModel';
import { PrismaService } from '@utils/database/prisma/prismaService';
import { Payment } from '@modules/payment/model/entity/payment';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentModel implements IPaymentModel {

  constructor(private prismaService: PrismaService) {}

  async createPayment(data: Payment): Promise<Payment> {
    const create = await this.prismaService.payment.create({
      data: {
        cpf: data.cpf,
        description: data.description,
        amount: data.amount,
        paymentMethod: data.paymentMethod as any,
      },
    });

    return create;
  }

  async updateStatusPayment(status: string, id: string): Promise<Payment | null> {
    const update = await this.prismaService.payment.update({
      where: {
        id: id
      },
      data: {
        status: status as any
      }
    });

    return update;
  }

  async listOrdersPaymentByCPF(cpf: string): Promise<Payment[]> {
    const find = await this.prismaService.payment.findMany({
      where: {
        cpf: cpf
      }
    });

    return find;
  }

  async listOrdersPaymentByPaymentMethod(paymentMethod: string): Promise<Payment[]> {
    const find = await this.prismaService.payment.findMany({
      where: {
        paymentMethod: paymentMethod as any
      }
    });

    return find;
  }

  async findPaymentByCPF(cpf: string): Promise<Payment | null> {
    const find = await this.prismaService.payment.findFirst({
      where: {
        cpf: cpf,
      },
    });

    return find;
  }

  async findPaymentByID(id: string): Promise<Payment | null> {
    const find = await this.prismaService.payment.findFirst({
      where: {
        id: id
      }
    });

    return find;
  }
  
}

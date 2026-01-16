import { Payment } from '@modules/payment/model/entity/payment';

export abstract class IPaymentModel {
  abstract createPayment(data: Payment): Promise<Payment>;
  abstract findPaymentByCPF(cpf: string): Promise<Payment | null>;
  abstract findPaymentByID(id: string): Promise<Payment | null>;
  abstract updateStatusPayment(status: string, id: string): Promise<Payment | null>;
  abstract listOrdersPaymentByPaymentMethod(paymentMethod: string): Promise<Payment[]>;
  abstract listOrdersPaymentByCPF(cpf: string): Promise<Payment[]>;
}

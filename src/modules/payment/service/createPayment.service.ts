import { IPaymentModel } from '@modules/payment/model/implementation-IPaymentModel/IPaymentModel';
import { IPaymentDTO, Payment } from '@modules/payment/model/entity/payment';
import { AppError } from '@utils/errors/appError';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePaymentService {

  constructor(private paymentModel: IPaymentModel) {}

  async execute(request: IPaymentDTO): Promise<Payment> {

    const { cpf, description, amount, paymentMethod } = request;

    if(cpf === "" || description === "" || paymentMethod === "") {
      throw new AppError('All the fields must have a value !', 401);
    }

    if(typeof(cpf) !== "string" || typeof(description) !== "string" || typeof(paymentMethod) !== "string") {
      throw new AppError('All the fields must be a string !', 401);
    }

    if(typeof(amount) !== "number") {
      throw new AppError('The (amount filed), must be a Float/Decimal number !', 401);
    }

    const regexCPF = /\d\d\d\.\d\d\d\.\d\d\d-\d\d/i;

    if(!regexCPF.test(cpf)) {
      throw new AppError("Please Put a Valid CPF !, exp(123.456.789-99)", 401);
    }

    if(paymentMethod === "PIX" || paymentMethod === "Pix") {
      const defaultPaymentMethod = "PIX";

      const createPayment = await this.paymentModel.createPayment({
        cpf,
        description,
        amount,
        paymentMethod: defaultPaymentMethod,
      });

      return createPayment;

    }else {

      // This section would then proceed to implement the integration with the Mercado Pago API. 
      // Essa parte seguiria para implementar a integração com a API do mercado pago.

      // if(paymentMethod === "CREDIT_CARD" || paymentMethod === "Credit_Card") {

      //   const defaultPaymentMethod = "CREDIT_CARD";

      //   const createPayment = await this.paymentModel.createPayment({
      //     cpf,
      //     description,
      //     amount,
      //     paymentMethod: defaultPaymentMethod,
      //   });

      //   return createPayment;
      // }

    }
    
    throw new AppError("The (paymentMethod) field must to be filled by (PIX, Pix OR CREDIT_CARD, Credit_Card)", 401);
  }
  
}

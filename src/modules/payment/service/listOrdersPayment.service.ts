import { IPaymentModel } from "@modules/payment/model/implementation-IPaymentModel/IPaymentModel";
import { Payment } from "@modules/payment/model/entity/payment";
import { AppError } from "@utils/errors/appError";
import { Injectable } from "@nestjs/common";

@Injectable()
export class listOrdersPaymentService {

    constructor(private paymentModel: IPaymentModel) {}

    async execute(cpf: string, paymentMethod: string): Promise<Payment[]> {
    
        if(cpf === "" || paymentMethod === "") {
            throw new AppError('All the fields must have a value !', 401);
        }

        if(typeof(cpf) !== "string" || typeof(paymentMethod) !== "string") {
            throw new AppError('All the fields must be a string !', 401);
        }

        const regexCPF = /\d\d\d\.\d\d\d\.\d\d\d-\d\d/i;

        if(!regexCPF.test(cpf)) {
            throw new AppError("Please Put a Valid CPF !, exp(123.456.789-99)", 401);
        }

        const findPaymentByCPF = await this.paymentModel.findPaymentByCPF(cpf);

        if(findPaymentByCPF !== null) {
            const listOrdersPaymentByCPF = await this.paymentModel.listOrdersPaymentByCPF(cpf);
            return listOrdersPaymentByCPF;

        }else if(findPaymentByCPF === null && paymentMethod === "PIX" || findPaymentByCPF === null && paymentMethod === "Pix") {
            const defaultPaymentMethod = "PIX";
            const listOrdersPaymentByPaymentMethod = await this.paymentModel.listOrdersPaymentByPaymentMethod(defaultPaymentMethod);
            return listOrdersPaymentByPaymentMethod;

        }else if(findPaymentByCPF === null && paymentMethod === "CREDIT_CARD" || findPaymentByCPF === null && paymentMethod === "CREDIT_CARD") {
            const defaultPaymentMethod = "CREDIT_CARDIX";
            const listOrdersPaymentByPaymentMethod = await this.paymentModel.listOrdersPaymentByPaymentMethod(defaultPaymentMethod);
            return listOrdersPaymentByPaymentMethod;
        }
        
        throw new AppError("The (paymentMethod) field must to be filled by (PIX, Pix OR CREDIT_CARD, Credit_Card)", 401);
    }

}
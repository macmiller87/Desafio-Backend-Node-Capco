import { IPaymentModel } from "@modules/payment/model/implementation-IPaymentModel/IPaymentModel";
import { IPaymentDTO } from "@modules/payment/model/entity/payment";
import { AppError } from "@utils/errors/appError";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ListSpecificPaymentService {

    constructor(private paymentModel: IPaymentModel) {}

    async execute(id: string): Promise<IPaymentDTO | null> {

        if(id === "") {
            throw new AppError("The parameter (ID), must have a value !", 401);
        }

        const listeSpecificOrderPayment = await this.paymentModel.findPaymentByID(id);

        if(!listeSpecificOrderPayment) {
            throw new AppError("Payment order not found", 401);
        }

        return listeSpecificOrderPayment;
    }

}
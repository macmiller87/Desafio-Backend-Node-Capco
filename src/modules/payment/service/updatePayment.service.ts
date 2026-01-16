import { IPaymentModel } from "@modules/payment/model/implementation-IPaymentModel/IPaymentModel";
import { IPaymentDTO } from "@modules/payment/model/entity/payment";
import { AppError } from "@utils/errors/appError";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdatePaymentService {

    constructor(private paymentModel: IPaymentModel) {}

    async execute(id: string, status: string): Promise<IPaymentDTO | null> {;

        if(id === "") {
            throw new AppError("The paramether (ID), must have a value !", 401);

        }else if(status === "") {
            throw new AppError('Status field must have a value !', 401);

        }else if(typeof(status) !== "string") {
            throw new AppError('Status field must be a string !', 401);

        }else {

            let statusMethod = "";

            if(status === "PENDING" || status === "Pending") {
                statusMethod = "PENDING";

            }else if(status === "PAID" || status === "Paid") {
                statusMethod = "PAID";

            }else if(status === "FAIL" || status === "Fail") {
                statusMethod = "FAIL";

            }else {
                throw new AppError("The (status) field must to be filled by (PENDING, Pending, PAID, Paid OR FAIL, fAIL)", 401);
            }

            const findPaymentById = await this.paymentModel.findPaymentByID(id);

            if(findPaymentById) {
                const updateStatusPayment = await this.paymentModel.updateStatusPayment(status, id);
                return updateStatusPayment;
            }

        }

        throw new AppError("Payment order not found !", 404);
    }

}
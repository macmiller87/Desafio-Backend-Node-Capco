import { listSpecificPaymentService } from '@modules/payment/service/listSpecificPayment.service';
import { listOrdersPaymentService } from '@modules/payment/service/listOrdersPayment.service';
import { CreatePaymentService } from '@modules/payment/service/createPayment.service';
import { UpdatePaymentService } from '@modules/payment/service/updatePayment.service';
import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import * as payment from '@modules/payment/model/entity/payment';

@Controller('/api/payment')
export class PaymentController {
  constructor(
    private createPaymentService: CreatePaymentService,
    private updatePaymentService: UpdatePaymentService,
    private listSpecificPaymentService: listSpecificPaymentService,
    private ListOrdersPaymentService: listOrdersPaymentService
  ) {}

  @Post()
  async createPayment(@Body() body: payment.IPaymentDTO) {
    return await this.createPaymentService.execute(body);
  }

  @Put(':id')
  async updatePayment(@Query('id') id: string, @Body() body: payment.IPaymentDTO) {
    const { status } = body;
    return await this.updatePaymentService.execute(id, status as any);
  }

  @Get(":id")
  async listSpecificPayment(@Query('id') id: string) {
    return await this.listSpecificPaymentService.execute(id);
  }

  @Get()
  async ListOrdersPayment(@Body() body: payment.IPaymentDTO) {
    const { cpf, paymentMethod } = body;
    return await this.ListOrdersPaymentService.execute(cpf, paymentMethod);
  }

}

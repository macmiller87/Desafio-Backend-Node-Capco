export interface IPaymentDTO {
  cpf: string;
  description: string;
  amount: number;
  paymentMethod: string;
  status?: string;
}

export class Payment {

  public set cpf(cpf: string) {
    this.cpf = cpf;
  }

  public get cpf() {
    return this.cpf;
  }

  public set description(description: string) {
    this.description = description;
  }

  public get description() {
    return this.description;
  }

  public set amount(amount: number) {
    this.amount = amount;
  }

  public get amount() {
    return this.amount;
  }

  public set paymentMethod(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
  }

  public get paymentMethod() {
    return this.paymentMethod;
  }
  
}

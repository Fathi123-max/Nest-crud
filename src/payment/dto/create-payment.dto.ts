export class CreatePaymentDto {
  amount: number;
  booking_id: number;
  payment_date: Date;
  payment_method: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  id: number;
  /**
   * The amount of the payment.
   * This is optional because when updating a payment,
   * the amount might not be changed.
   */
  amount?: number | undefined;

  /**
   * The booking ID associated with the payment.
   * This is optional because when updating a payment,
   * the booking ID might not be changed.
   */
  booking_id?: number | undefined;

  /**
   * The payment date.
   * This is optional because when updating a payment,
   * the payment date might not be changed.
   */
  payment_date?: Date | undefined;

  /**
   * The payment method.
   * This is optional because when updating a payment,
   * the payment method might not be changed.
   */
  payment_method?: string | undefined;
}

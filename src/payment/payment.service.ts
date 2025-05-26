import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    // create method will return a new Payment entity instance
    // but it will NOT be saved to the database, so we need to call
    // save method to persist the data
    const payment = this.paymentRepository.create(createPaymentDto);
    return this.paymentRepository.save(payment);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return this.paymentRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepository.findOne({ where: { id } });
    if (!payment) {
      throw new Error('Payment not found');
    }

    // the save method will return a new Payment entity instance
    // with the updated data. We are using the spread operator
    // to merge the existing payment data with the updatePaymentDto
    // object. This way we don't need to set each property individually
    // and we also avoid overwriting the existing data.
    return this.paymentRepository.save({ ...payment, ...updatePaymentDto });
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}

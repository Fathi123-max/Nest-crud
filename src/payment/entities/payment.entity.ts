import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ default: 30 })
  booking_id: number;

  @Column()
  payment_date: Date;

  @Column()
  payment_method: string;
}

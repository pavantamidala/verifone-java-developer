import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Sim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  simCardNo: number;
  @Column()
  mobileNo: number;
  @Column()
  status: string;
  @Column()
  expiryDate: number;
  @Column()
  stateOfRegistration: string;
  @Column()
  kyc: boolean;
  @Column()
  telecomProvider: string;
  @Column()
  fullName: string;

  @AfterInsert()
  insert() {
    console.log(`insterted user with id ${this.id}`);
  }

  @AfterRemove()
  remove() {
    console.log(`removed user with id ${this.id}`);
  }

  @AfterUpdate()
  update() {
    console.log(`updated user with id ${this.id}`);
  }
}

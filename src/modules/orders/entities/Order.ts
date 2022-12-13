import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Game } from '../../games/entities/Game';
import { User } from '../../users/entities/User';
import { Product } from './Product';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: number;

  @Column()
  usersId: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => User, (user) => user.orders)
  @JoinTable()
  users: User[];

  @ManyToMany(() => Product, (products) => products.orders)
  @JoinTable()
  products: Order[];


}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Game } from '../../games/entities/Game';
import { Order } from './Order';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gameId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column()
  price_full: number;

  @Column()
  price_sale: number;

  @Column()
  available_start: Date;

  @Column()
  available_end: Date;

  @Column()
  inventory: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Game, (game) => game.products)
  @JoinTable()
  game: Game;

  @ManyToMany(() => Order, (orders) => orders.products)
  orders: Order[];
}
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Genre } from './Genre';
import { User } from '../../users/entities/User';
import { Product } from '../../orders/entities/Product'

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Genre, (genre) => genre.games)
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => User, (user) => user.games)
  @JoinTable()
  users: User[];

  @OneToMany(() => Product, (products) => products.game)
  @JoinTable()
  products: Product[];
}
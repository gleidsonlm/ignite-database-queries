import { getRepository, Repository } from 'typeorm';

import { Order } from '../../entities/Order';

import { IOrdersRepository } from '../IOrdersRepository';

export class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }
}
import {OrderItem} from './order-item';

export class Order {
    id: number;
    date: number;
    items: OrderItem[];
    paid: boolean;
};

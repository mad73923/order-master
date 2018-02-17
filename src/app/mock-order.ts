import {Order} from './order';
import { OrderItem } from './order-item';

export const mockOrder: Order = {
    id: 1234,
    date: Date.now(),
    paid: false,
    items: [
        {count: 2,
        name:"pizza",
        price: 4.5},
        {count: 1,
            name:"döner",
            price: 4.5},
        {count: 1,
            name:"falafel",
            price: 3.5}
    ]
};

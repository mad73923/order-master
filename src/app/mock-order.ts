import {Order} from './order';
import { OrderItem } from './order-item';

export const mockOrder: Order = {
    id: 1234,
    date: Date.now(),
    items: [
        {id: 9876,
        name:"pizza",
        price: 4.5},
        {id: 93468216,
            name:"döner",
            price: 4.5},
        {id: 93468216,
            name:"falafel",
            price: 3.5}
    ]
};

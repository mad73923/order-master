import {Order} from '../../shared/order';
import {OrderItem} from '../../shared/order-item';

export class OrderClass extends Order{
    sum: number;

    deleteItem(item: OrderItem) {
        const index = this.items.indexOf(item, 0);
        if (index > -1) {
          this.items.splice(index, 1);
        }
        this.update_order_sum();
      }
    
      pay() {
        this.paid = true;
      }
    
      update_order_sum() {
        let erg = 0;
        this.items.forEach(element => {
          erg += element.price * element.count;
        });
        this.sum = erg;
      }
    
      add_item(item: OrderItem) {
        this.items.push(item);
        this.update_order_sum();
      }
};

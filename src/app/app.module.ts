import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { AddOrderItemComponent } from './add-order-item/add-order-item.component';
import { InDecrementButtonsComponent } from './in-decrement-buttons/in-decrement-buttons.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderService } from './order.service';
import { OrdersOverviewComponent } from './orders-overview/orders-overview.component';
import { OrdersOverviewRowComponent } from './orders-overview-row/orders-overview-row.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderListItemComponent,
    AddOrderItemComponent,
    InDecrementButtonsComponent,
    NewOrderComponent,
    OrdersOverviewComponent,
    OrdersOverviewRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

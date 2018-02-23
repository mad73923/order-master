import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { AddOrderItemComponent } from './add-order-item/add-order-item.component';
import { InDecrementButtonsComponent } from './in-decrement-buttons/in-decrement-buttons.component';
import { NewOrderComponent } from './new-order/new-order.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderListItemComponent,
    AddOrderItemComponent,
    InDecrementButtonsComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { AddOrderItemComponent } from './add-order-item/add-order-item.component';
import { InDecrementButtonsComponent } from './in-decrement-buttons/in-decrement-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderListItemComponent,
    AddOrderItemComponent,
    InDecrementButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

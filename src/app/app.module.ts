import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { AddOrderItemComponent } from './add-order-item/add-order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderListItemComponent,
    AddOrderItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

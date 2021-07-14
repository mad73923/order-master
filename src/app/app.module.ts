import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
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
import { UierrorHandlerService } from './uierror-handler.service';
import { StageComponent } from './stage/stage.component';
import { WaitingTimeComponent } from './waiting-time/waiting-time.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'active-orders', component: OrdersOverviewComponent},
  {path: 'new-order', component: NewOrderComponent},
  {path: 'stage/:id', component: StageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderListItemComponent,
    AddOrderItemComponent,
    InDecrementButtonsComponent,
    NewOrderComponent,
    OrdersOverviewComponent,
    OrdersOverviewRowComponent,
    StageComponent,
    WaitingTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OrderService, {provide: ErrorHandler, useClass: UierrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

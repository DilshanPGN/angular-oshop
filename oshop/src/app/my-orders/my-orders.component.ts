import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  orders$ : Observable<any>;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.pipe(
      switchMap(user => orderService.getOrdersByUser(user!.uid))
    );
  }



}

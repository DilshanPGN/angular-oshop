import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../../shared/models/order';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  @Input('cart') cart!: ShoppingCart;

  shipping : any = {}; 
  userSubcription = Subscription;
  userId!: string|undefined;

  
  constructor(
    private router : Router,
    private orderService : OrderService,
    private authService : AuthService
    ){}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.userId = user?.uid);
  }
  async placeOrder() {
    let order = new Order(this.userId , this.shipping , this.cart)
    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['/order-success', result.key])
  }  
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  implements OnInit , OnDestroy{ 
  shipping : any = {}; 
  cart!: ShoppingCart;
  cartSubcription = Subscription;
  userSubcription = Subscription;
  userId!: string|undefined;

  constructor(
    private shoppingCartServices : ShoppingCartService , 
    private orderService : OrderService,
    private authService : AuthService
    ){}
 
  async ngOnInit() {
    let cart$ = await this.shoppingCartServices.getCart();
    cart$.subscribe(cart=> this.cart = cart);

    this.authService.user$.subscribe(user => this.userId = user?.uid);
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  placeOrder() {
    let order = new Order(this.userId , this.shipping , this.cart)

    this.orderService.storeOrder(order);
  }    
}

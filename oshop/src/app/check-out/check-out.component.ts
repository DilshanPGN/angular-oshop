import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
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
  subcription = Subscription;

  constructor(private shoppingCartServices : ShoppingCartService , private orderService : OrderService){}
 
  async ngOnInit() {
    let cart$ = await this.shoppingCartServices.getCart();
    cart$.subscribe(cart=> this.cart = cart);
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  placeOrder() {
    let order = {
      datePlaced: new Date().getDate(),
      shipping : this.shipping,
      items: this.cart.items.map(i=>{
        return {
          products: {
            title : i.title,
            imageUrl : i.imageUrl,
            price : i.price
          },
          quntity: i.quantity,
          totalPrice: i.totalPrice
        }
      })

    }

    this.orderService.storeOrder(order);
  }    
}

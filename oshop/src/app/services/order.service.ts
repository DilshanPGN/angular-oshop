import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db : AngularFireDatabase , private shoppingCartService : ShoppingCartService) { }


  async storeOrder(order: any){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
    //return bcoz we need to get key of this new order and 
    //redercrt to orer successful page
  }

  //New 
  
  getOrders() { 
    return this.db.list('/orders').valueChanges();
  }


  getOrdersByUser(userId: string) {
    return this.db.list('/orders', 
      res => res.orderByChild('userId').equalTo(userId)).valueChanges();
  }
  
}

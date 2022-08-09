import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

 
  @Input('product')product : any;
  @Input('shopping-cart')
  shoppingCart!: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
   // this.addToCart(product);
   this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  

  
}

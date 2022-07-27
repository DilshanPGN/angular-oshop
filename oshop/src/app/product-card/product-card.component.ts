import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  
  @Input('product')product : any;
  @Input('show-actions')showActions = true;
  @Input('shopping-cart')shoppingCart: any;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
   // this.addToCart(product);
   this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(){

    //initialy when we get shopping cart from firebase , itss going to
    //be tiny delay.during that time shopping card going to be null

    if(!this.shoppingCart) return 0; // handle null event
    let item = this.shoppingCart.itemsMap[this.product.key]; 
    // shopping-cart => itemsMap node eke api click karapu item eke
    //id ekata alapena item eka gannawa
    return item ? item.quantity : 0;
  }
}
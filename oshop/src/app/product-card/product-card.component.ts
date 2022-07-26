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

  addToCart(product : any){
   // this.addToCart(product);
   this.cartService.addToCart(product);;
  }

  getQuantity(){

    //initialy when we get shopping cart from firebase , itss going to
    //be tiny delay.during that time shopping card going to be null

    if(!this.shoppingCart) return 0; // handle null event
    let item = this.shoppingCart.items[this.product.key]; 
    // shopping-cart => items node eke api click karapu item eke
    //id ekata alapena item eka gannawa
    return item ? item.quantity : 0;
  }
}
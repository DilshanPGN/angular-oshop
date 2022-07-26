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
  constructor(private cartService: ShoppingCartService) { }


  addToCart(product : any){
   // this.addToCart(product);
   this.cartService.addToCart(product);;
  }


}

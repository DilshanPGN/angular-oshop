import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  

    constructor(public items:{ [key: string]: ShoppingCartItem } ){

    }

    get totalItemsCount(){

        let count = 0;
        for(let productID in this.items)
          count += (this.items[productID].quantity) || 0;
        return count;
    }

    get productIds(){
      //getting productt ID s of products in the card
      return Object.keys(this.items);
    }
}
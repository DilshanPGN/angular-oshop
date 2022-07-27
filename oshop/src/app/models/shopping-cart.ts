import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  
    items : ShoppingCartItem[] = [];

    constructor(public itemsMap:{ [productId: string]: ShoppingCartItem } ){

      for(let productId in itemsMap){
        this.items.push(itemsMap[productId]);
      }
    }

    get totalItemsCount(){

        let count = 0;
        for(let productID in this.itemsMap)
          count += (this.itemsMap[productID].quantity) || 0;
        return count;
    }

    get productIds(){
      //getting productt ID s of products in the card
    
      return Object.keys(this.itemsMap);
    }
}
import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  
    items : ShoppingCartItem[] = [];

    constructor(public itemsMap:{ [productId: string]: ShoppingCartItem } ){

      this.itemsMap = itemsMap || {};

      for(let productId in itemsMap){

        let item = itemsMap[productId];

        let x = new ShoppingCartItem();
        x.key = productId;
        
        Object.assign(x , item); //copy all the propertise that we get from this object from firebase
        // into this object

        this.items.push(x);
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


    get totalPrice(){
      let sum = 0;
      
      for(let productId in this.items){
        sum += this.items[productId].totalPrice;
      }

      return sum;
    }


    getQuantityOfProduct(product : Product){
      

      
      let item = this.itemsMap[product.key]; 
      // shopping-cart => itemsMap node eke api click karapu item eke
      //id ekata alapena item eka gannawa
      
      return item ? item.quantity : 0;
    }
}
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable, take } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: any, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async getCart() : Promise<AngularFireObject<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }


  private async getOrCreateCartId(){ 

  
    let cartId = localStorage.getItem('cartId');

    /*     Method 1  
    if(!cartId){
      this.create().then(result => {
        localStorage.setItem('cartId', result.key || '');
        //if cart not found from local storage
        return this.getCart(result.key || '');
      })
    }
    else
      //if cart found from localStorage
      return this.getCart(cartId);

    */

    /* Method 2 - using async awaits for make sync methods to async */
    
    if(cartId)return cartId;
    
    let result = await this.create();
    localStorage.setItem('cartId', result.key || '');
    return result.key;      

  }


  async addToCart(product : any){
    this.updateItemQuantity(product , 1);
  }

  async removeFromCart(product : any){
    this.updateItemQuantity(product , -1);
  }


  private async updateItemQuantity(product : any , change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId , product.key);
    item$.valueChanges().pipe(take(1))
      .subscribe((item : any )=> {
        if(item){
          item$.update({quantity: item.quantity + change});
        }else{
          item$.set({ product : product , quantity :1 });
        }
      });
  }
}

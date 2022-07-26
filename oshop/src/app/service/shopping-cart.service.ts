import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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

  private getCart(cartId : string){
    return this.db.object('/shopping-carts/' + cartId);
  }


  private async getOrCreateCart(){

  
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
    
    if(!cartId || cartId===''){
      let result = await this.create();
      localStorage.setItem('cartId', result.key || '');
      return this.getCart(result.key || '');
    }
    
    //else
    return this.getCart(cartId);
  }
}

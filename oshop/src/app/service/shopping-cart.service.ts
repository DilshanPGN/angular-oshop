import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, take } from 'rxjs';

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

    let cartId = await this.getOrCreateCartId();
    //awaits for getting cart number as async

    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);


    item$.valueChanges().pipe(take(1))  //take(1) means get one time only..so we no need to implement unsubscribe
      .subscribe((item : any )=> {

        if(item){
          //if item already exists in the cart 
          item$.update({quantity: item.quantity + 1});

        }else{
          //if item not exists in cart
          //create new product in items (whole product)
          item$.set( { product : product , quantity :1 });
        }
      });
  }
}

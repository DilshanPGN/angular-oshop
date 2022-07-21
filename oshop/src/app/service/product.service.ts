import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any){

    return this.db.list('/products').push(product);

  }

  update(productId:string , product:any){

    return this.db.object('/products/'+ productId).update(product);

  }

  delete(productId:string){

    return this.db.object('/products/'+ productId).remove();

  }


  getAll(){
    return this.db.list('/products');
  }

  
  get(productId: string){
    return this.db.object('/products/'+ productId);
  }
}

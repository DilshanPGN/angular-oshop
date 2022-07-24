import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';
export interface ProdInterface {
  key: string;
  title: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})



export class ProductService {

  prodArray : ProdInterface[] =[];

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
    return this.db
    .list('/products')
    .snapshotChanges()
    .pipe(
      map(action => {
        return action.map(a=>{

          const key = a.payload.key;
          const val= a.payload.val() as ProdInterface;
  
          return {
            key,
            title: val.title ,
            price: val.price , 
            ImageUrl: val.imageUrl
          };
      });

      })
    );
    }
        
  
  get(productId: string){
    return this.db.object('/products/'+ productId);
  }
}

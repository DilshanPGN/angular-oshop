import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit, OnDestroy {

  products$: Observable<any> ;

  subscription : Subscription;

  products: any[] =[]; //save products array after subscribing
  filteredProducts: any[] =[]; 

  displayedColumns: string[] = ['title', 'price', 'edit'];
  

  constructor(private productService : ProductService) {
    this.products$ = this.productService.getAll().snapshotChanges();

   

    this.subscription  =this.products$.subscribe(prod =>{
      this.products= this.filteredProducts = prod;
    } );

   }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filter(query : string){

    this.filteredProducts = (query) ?    //if querry exist
      this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :  //else
      this.products;
  }

}

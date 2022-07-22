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

  constructor(private productService : ProductService) {
    this.products$ = this.productService.getAll().snapshotChanges();

    //print objects

    this.subscription  =this.products$.subscribe(prod =>{
      this.products= this.filteredProducts = prod;
    } );

    //this.productService.getAll().snapshotChanges().subscribe(prod => this.products = prod);
    
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filter(query : string){
    //console.log(query);

    this.filteredProducts = (query) ?    //if querry exist
      this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :  //else
      this.products;
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any[] = [];
  filteredProducts: any[] = [];
  cart$!: Observable<ShoppingCart>;
  
  category: any;

  constructor(
    private productService: ProductService , 
    private shoppingCartService : ShoppingCartService,
    private route: ActivatedRoute // for read route parameteres
    ) {
    
    
    
    

    
    
   }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
    
  }

  private populateProducts(){
    this.productService.getAll().pipe(
      switchMap(prod => {
        this.products = prod;
        return this.route.queryParamMap;
      })
    )

    .subscribe(params=>{
      this.category = params.get('category');
      this.applyFileter();
    });
  }

  private applyFileter(){
    //apply filter
    this.filteredProducts = (this.category) ? // if this have a category
    this.products.filter(p => p.category === this.category) : //otherwise
    this.products;
  }

  
}




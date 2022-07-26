import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ProductService } from '../service/product.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{

  products : any[] = [];
  filteredProducts: any[] = [];
  cart: any;
  subcription!: Subscription;
  
  category: any;

  constructor(
    private productService: ProductService , 
    private shoppingCartService : ShoppingCartService,
    private route: ActivatedRoute // for read route parameteres
    ) {
    
    productService.getAll().pipe(
      switchMap(prod => {
        this.products = prod;
        return this.route.queryParamMap;
      })
    )

    .subscribe(params=>{
      this.category = params.get('category');
    
      
      //apply filter
      this.filteredProducts = (this.category) ? // if this have a category
        this.products.filter(p => p.category === this.category) : //otherwise
        this.products;
        
      
    });
    
    

    
    
   }

  async ngOnInit() {
    this.subcription = (await this.shoppingCartService.getCart()).valueChanges().subscribe(cart => {
      this.cart= cart;
    })
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}




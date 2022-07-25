import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any[] = [];
  filteredProducts: any[] = [];
  
  
  category: any;

  constructor(
    private productService: ProductService , 
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

  ngOnInit(): void {
  }

}




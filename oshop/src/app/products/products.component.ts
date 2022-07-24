import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<any>;
  categories$ : Observable<any>;

  constructor(private productService: ProductService , private categoryService: CategoryService ) {
    
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getCategories().valueChanges();

    
   }

  ngOnInit(): void {
  }

}

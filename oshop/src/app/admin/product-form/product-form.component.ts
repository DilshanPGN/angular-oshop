import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$ : Observable<any>;
  //we can unwarap this in html template using Async

  constructor(
    private categoryService : CategoryService , 
    private productService: ProductService,
    private router: Router
    ) {
      this.categories$ = categoryService.getCategories().valueChanges();
   }

  ngOnInit(): void {
  }

  save(product: any){
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }

}

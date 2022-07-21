import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
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


  product: any = {}; // for edit

  constructor(
    private categoryService : CategoryService , 
    private route: ActivatedRoute, //we can read route parameters
    private productService: ProductService,
    private router: Router
    ) {
      this.categories$ = categoryService.getCategories().valueChanges();

      let id = this.route.snapshot.paramMap.get('id'); //geting id from route url


      /* take - we can get only one value from observable and that observable
      will automatically complete */
      if(id) this.productService.get(id).valueChanges().pipe(take(1)).subscribe(p=> this.product = p);
   }

  ngOnInit(): void {
  }

  save(product: any){
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }



}

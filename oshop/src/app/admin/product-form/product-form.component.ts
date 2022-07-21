import { Component, OnInit } from '@angular/core';
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

  id:string|null;

  constructor(
    private categoryService : CategoryService , 
    private route: ActivatedRoute, //we can read route parameters
    private productService: ProductService,
    private router: Router
    ) {
      this.categories$ = categoryService.getCategories().valueChanges();

      this.id = this.route.snapshot.paramMap.get('id'); //geting id from route url


      /* take - we can get only one value from observable and that observable
      will automatically complete */
      if(this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p=> this.product = p);
   }

  ngOnInit(): void {
  }

  save(product: any){

    if (this.id) this.productService.update(this.id , product);
    else this.productService.create(product);

    
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(this.id){
      if(confirm('Are you sure want to delet this product ?')){
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
      }
    }else{
      console.log("ID not found")
    }
    
  }



}

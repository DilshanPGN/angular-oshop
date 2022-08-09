import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$ : Observable<any>;

  @Input('category') category: any;
  //geting data to any from product component => category

  constructor(private categoryService: CategoryService ) {
    this.categories$ = categoryService.getCategories().valueChanges();

    
   }

  ngOnInit(): void {
  }

}

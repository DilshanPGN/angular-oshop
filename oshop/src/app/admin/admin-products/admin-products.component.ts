import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: Observable<any> ;

  constructor(private productService : ProductService) {
    this.products$ = this.productService.getAll().snapshotChanges();

    //print objects

    this.products$.subscribe(prod => console.log(prod));
   }

  ngOnInit(): void {
  }

}

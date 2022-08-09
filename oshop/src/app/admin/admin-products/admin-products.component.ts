import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})



export class AdminProductsComponent implements AfterViewInit, OnDestroy {


  subscription : Subscription;

  products: any[] =[]; //save products array after subscribing

  displayedColumns: string[] = ['title', 'price', 'edit'];

  dataSource = new MatTableDataSource<any>(this.products);
  
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private productService : ProductService ) {

    this.subscription =productService.getAll().subscribe(res=>{
      this.products= res;
      this.dataSource.data = this.products;
    })

   }

   ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

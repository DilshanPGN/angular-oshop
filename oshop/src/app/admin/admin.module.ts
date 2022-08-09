import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard} from '../shared/services/auth-guard.service';
import { AdminAuthGuardService as AdminAuthGuard} from '../shared/services/admin-auth-guard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [

    //Mat
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([

      {path: 'admin/products/new' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products/:id' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products' , component: AdminProductsComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate:[AuthGuard , AdminAuthGuard]}
    ])
  ],
  providers: [AdminAuthGuard ]
})
export class AdminModule { }

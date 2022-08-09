import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from 'src/environments/environment';

import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminModule } from './admin/admin.module';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { AdminAuthGuardService as AdminAuthGuard } from './shared/services/admin-auth-guard.service';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,

    //custom
    SharedModule,
    AdminModule,

    

    //testing
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,


    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CustomFormsModule ,
    RouterModule.forRoot([
      {path: '' , component: ProductsComponent},
      
      {path: 'products' , component: ProductsComponent},
      {path: 'shopping-cart' , component: ShoppingCartComponent},
      {path: 'login' , component: LoginComponent},

      //  /admin/products/

      {path: 'check-out' , component: CheckOutComponent , canActivate:[AuthGuard]},
      {path: 'order-success/:id' , component: OrderSuccessComponent, canActivate:[AuthGuard]},
      {path: 'my/orders' , component: MyOrdersComponent, canActivate:[AuthGuard]},

      {path: 'admin/products/new' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products/:id' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products' , component: AdminProductsComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate:[AuthGuard , AdminAuthGuard]}
    ]),
    NgbModule,
    BrowserAnimationsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

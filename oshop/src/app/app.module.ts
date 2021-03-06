import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './service/auth.service';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { UserService } from './service/user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './service/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './service/category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

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
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,

    //testing
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
      {path: 'order-success' , component: OrderSuccessComponent, canActivate:[AuthGuard]},
      {path: 'my/orders' , component: MyOrdersComponent, canActivate:[AuthGuard]},

      {path: 'admin/products/new' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products/:id' , component: ProductFormComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/products' , component: AdminProductsComponent, canActivate:[AuthGuard , AdminAuthGuard]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate:[AuthGuard , AdminAuthGuard]}
    ]),
    NgbModule,
    BrowserAnimationsModule
    
  ],
  providers: [AuthService, AuthGuard , UserService , AdminAuthGuard , CategoryService , ProductService , ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

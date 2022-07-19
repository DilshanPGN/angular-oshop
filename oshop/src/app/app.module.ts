import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'products' , component: ProductsComponent},
      {path: 'shopping-cart' , component: ShoppingCartComponent},
      {path: 'login' , component: LoginComponent},


      {path: 'check-out' , component: CheckOutComponent , canActivate:[AuthGuard]},
      {path: 'order-success' , component: OrderSuccessComponent, canActivate:[AuthGuard]},
      {path: 'my/orders' , component: MyOrdersComponent, canActivate:[AuthGuard]},

      {path: 'admin/products' , component: AdminProductsComponent, canActivate:[AuthGuard]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate:[AuthGuard]}
    ]),
    NgbModule
    
  ],
  providers: [AuthService, AuthGuard , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

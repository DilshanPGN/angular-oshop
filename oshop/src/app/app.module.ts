import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,

    //custom
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,

    //testing
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase ),
    
    RouterModule.forRoot([
      {path: '' , component: ProductsComponent},
      {path: 'login' , component: LoginComponent},
     
    ]),
    
    BrowserAnimationsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

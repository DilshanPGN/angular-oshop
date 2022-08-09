import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
  
  appUser: AppUser | null | undefined;
  cart$!: Observable<ShoppingCart | null>;



  constructor(public auth: AuthService , private shoppingCartService: ShoppingCartService) { 
    }

  logout(){
    this.auth.logout();
  }


  async ngOnInit(){
    this.auth.appUsers$.subscribe(app_user => this.appUser = app_user);

    this.cart$ =  await (this.shoppingCartService.getCart());
  
  }
  
}

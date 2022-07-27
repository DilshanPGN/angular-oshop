import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../service/auth.service';
import { ShoppingCartService } from '../service/shopping-cart.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
  
  appUser: AppUser | null | undefined;
  shoppingCartItemCount :number = 0;



  constructor(public auth: AuthService , private shoppingCartService: ShoppingCartService) { 
    }

  logout(){
    this.auth.logout();
  }


  async ngOnInit(){
    this.auth.appUsers$.subscribe(app_user => this.appUser = app_user);

    let cart$ = await (await this.shoppingCartService.getCart()).valueChanges();

    cart$.subscribe(cart => {

      
      this.shoppingCartItemCount =0;
      for(let productID in cart?.items){
        
        this.shoppingCartItemCount += (cart?.items[productID].quantity) || 0;
        
      }
    })
    



  
  }
  
}

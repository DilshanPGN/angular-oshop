import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  
  appUser: AppUser | null | undefined;
  constructor(public auth: AuthService) { 
    auth.appUsers$.subscribe(app_user => this.appUser = app_user);
   }

  logout(){
    this.auth.logout();
  }
  
}

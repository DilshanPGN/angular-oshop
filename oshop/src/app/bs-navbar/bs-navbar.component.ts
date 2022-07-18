import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  

  constructor(public auth: AuthService) { 
    
   }

  logout(){
    this.auth.logout();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  

  user : firebase.default.User | null | undefined ;

  constructor(private afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(res=> this.user = res);
  }

  logout(){
    this.afAuth.signOut();
  }
  
}

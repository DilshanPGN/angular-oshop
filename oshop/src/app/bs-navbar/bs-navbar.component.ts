import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  

  user$ : Observable<firebase.default.User | null> ; //logged user

  constructor(private afAuth:AngularFireAuth) { 
    this.user$ = afAuth.authState ;  
    //we are going to unwrap this obervable in our template using Async Pipe. 
    //this pipe will automaticaly unsubscribe this obervable ehen component is destroyed.
  }

  logout(){
    this.afAuth.signOut();
  }
  
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.default.User | null> ; //logged user


  constructor(public afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState ;  
    //we are going to unwrap this obervable in our template using Async Pipe. 
    //this pipe will automaticaly unsubscribe this obervable ehen component is destroyed.
  
  }

  login(){
    this.afAuth.signInWithRedirect( new GoogleAuthProvider());
  }


  logout(){
    this.afAuth.signOut();
  }
}

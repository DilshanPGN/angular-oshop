import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.default.User | null> ; //logged user


  constructor(public afAuth: AngularFireAuth , private route: ActivatedRoute) { 
    this.user$ = afAuth.authState ;  
    //we are going to unwrap this obervable in our template using Async Pipe. 
    //this pipe will automaticaly unsubscribe this obervable ehen component is destroyed.
  
  }

  login(){

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl' , returnUrl);

    this.afAuth.signInWithRedirect( new GoogleAuthProvider());
  }


  logout(){
    this.afAuth.signOut();
  }
}

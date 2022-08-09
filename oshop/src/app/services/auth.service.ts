import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../shared/models/app-user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.default.User | null> ; //logged user
 


  constructor(
    public afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private userService : UserService
    
    ) { 
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


  get appUsers$() : Observable<AppUser | null>{

    return this.user$.pipe(
      switchMap(user => this.userService.get(user?.uid).valueChanges() )  
    );
  }
}

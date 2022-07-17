import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from '@angular/fire/auth'


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  constructor(private afAuth:AngularFireAuth) { 
    
  }

  logout(){
    this.afAuth.signOut();
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private auth: AuthService , router: Router){

    //whenever user signIn
    auth.user$.subscribe(user =>{

      //if user exist rederect to return url
      if(user){
        let returnUrl = localStorage.getItem('returnUrl') || "/";
        console.log('returnUrl = ' + returnUrl);
        router.navigateByUrl(returnUrl);
      }

    })

  }

}

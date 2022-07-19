import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private auth: AuthService , router: Router , private userService: UserService){

    //whenever user signIn
    auth.user$.subscribe(user =>{

      //if user exist rederect to return url
      if(user){
        
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl') || "/";
        router.navigateByUrl(returnUrl);
      }

    })

  }

}

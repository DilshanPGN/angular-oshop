import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private auth: AuthService , private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return this.auth.user$.pipe(

      //transform user object to boolean
      map(user => {

        if(user) return true;

        this.router.navigate(['/login'] , {queryParams :{ returnUrl: state.url}});  //if anonymous user try to type and go admin url , then go to log in and add quer params as  return url to targeted page
        return false;

      })
    )
  } 
}

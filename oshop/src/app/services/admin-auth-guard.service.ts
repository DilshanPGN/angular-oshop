import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth:AuthService , private userService: UserService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.appUsers$.pipe(
      map(appuser => {
        if(appuser?.isAdmin==true){
          return true;
        }else{
          return false;
        }
      })
    );
  }


    //this user is not the 'user we saved in realtime database'. this is user saved when we loging in

        //me user wa store karala thiyena object ekata map karala.. observable eka swap karanna oona
         
}

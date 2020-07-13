import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';


import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  constructor(
    private  validate: LoginService,
    private  router:Router,
    
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.validate.validarInicio()){
        return true;
      }else{
        this.router.navigate(['/'])
        return false;
      }

          
        
  }
  
}

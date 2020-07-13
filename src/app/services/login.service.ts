import { Login } from '../models/login';
import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { CookieService }  from 'ngx-cookie-service';

@Injectable()

export class LoginService{
    public url :string;

    constructor(
        private _http : HttpClient,
        private cookieService: CookieService,
    ){
        this.url =Global.url;
    }

    validarLogin(body):Observable<any>{
      return this._http.post(this.url+"validateUser",body);
    }

    registerUser(body):Observable<any>{
        return this._http.post(this.url+"registerUser",body);
    }

    validarInicio():boolean{
        if(this.cookieService.get('cookie-N')||this.cookieService.get('cookie-T')){
            return true;
        }else{
            return false;
        }     
    }

    cerrarSesion():void{
        this.cookieService.delete('cookie-T','/');
        this.cookieService.delete('cookie-N','/');
        this.cookieService.delete('cookieT','/');
        this.cookieService.delete('cookie-T','/app');
        this.cookieService.delete('cookie-N','/app');
        this.cookieService.delete('cookieT','/app');
    }


}
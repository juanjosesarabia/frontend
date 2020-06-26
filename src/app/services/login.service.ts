import { Login } from '../models/login';
import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';

@Injectable()

export class LoginService{
    public url :string;

    constructor(
        private _http : HttpClient
    ){
        this.url =Global.url;
    }

    validarLogin(body):Observable<any>{
      return this._http.post(this.url+"validateUser",body);
    }

    registerUser(body):Observable<any>{
        return this._http.post(this.url+"registerUser",body);
    }


}
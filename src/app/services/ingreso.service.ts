import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { CookieService }  from 'ngx-cookie-service';


@Injectable()

export class IngresoService{
    public url :string;

    public headers = new HttpHeaders({
        'Authorization': 'Bearer '+this.cookieService.get('cookie-T')
        });

    constructor(
        private _http : HttpClient,
        private cookieService: CookieService
       
    ){
        this.url =Global.url;
    }
  
    getIngresos():Observable<any>{   
    
        return this._http.get(this.url+"getIngreSolo",{headers:this.headers});
     }
   


}
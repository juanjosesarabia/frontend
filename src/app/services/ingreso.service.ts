import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
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
  
    getIngresos():Observable<any>{  //Obtener ingresos
        return this._http.get(this.url+"getIngreSolo",{headers:this.headers});
     }
     getIngresosDelete():Observable<any>{  // Obtener Ingresos eliminados
        return this._http.get(this.url+"getIngresosEliminados",{headers:this.headers});
     }
     restoreIngreso(body):Observable<any>{   // Restaurar ingreso
        return this._http.post(this.url+"restoreIngreso",body,{headers:this.headers});    
    }
    getIngreOne(body):Observable<any>{   // Obtener ingreso
        let params = new HttpParams().set("id_ingreso",body)
        let options = {headers:this.headers,params: params};
        return this._http.get(this.url+"getIngreOne",options);    
    }
     
    eliminarIngreso(body):Observable<any>{   // Eliminar ingreso 
        let options = {headers:this.headers, body:body };
        return this._http.delete(this.url+"deleteIngreso",options);    
    }

    editIngreso(body):Observable<any>{//editar Ingreso
        console.log(body);
        return this._http.put(this.url+"editIngreso",body,{headers:this.headers});
        
    }
}
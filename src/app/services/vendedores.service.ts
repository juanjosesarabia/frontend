import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { CookieService }  from 'ngx-cookie-service';


@Injectable()

export class VendedoresService{
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
  
    getVendedores():Observable<any>{      //Obtener Vendedores registrados
        return this._http.get(this.url+"getVendedores",{headers:this.headers});
     }

     getVendedoresDelete():Observable<any>{      //Obtener Vendedores eliminados
        return this._http.get(this.url+"getVendedorDelete",{headers:this.headers});
     }

     editVendedor(body):Observable<any>{//editar Vendedor
         return this._http.put(this.url+"editVendedor",body,{headers:this.headers})
     }

     eliminarVendedor(body):Observable<any>{   // Eliminar vendedor
        let options = {headers:this.headers, body:body };
        return this._http.delete(this.url+"deleteVendedor",options);    
    }
   
    restoreVendedor(body):Observable<any>{   // Restaurar vendedor
        return this._http.post(this.url+"restoreVendedor",body,{headers:this.headers});    
    }

    addVendedor(body):Observable<any>{   // Agregar vendedor
        return this._http.post(this.url+"registerVendedor",body,{headers:this.headers});    
    }
    

}
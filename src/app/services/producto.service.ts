import { Login } from '../models/login';
import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { CookieService }  from 'ngx-cookie-service';


@Injectable()

export class ProductoService{
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
  
    getUsuarios():Observable<any>{// Obtener producto 
        return this._http.get(this.url+"getsProducto",{headers:this.headers});
     }
     registerProducto(body):Observable<any>{// Registrar producto 
        return this._http.post(this.url+"registerProducto",body,{headers:this.headers});
     }
     eliminarProducto(body):Observable<any>{// Eliminar producto
        let options = {headers:this.headers, body:body };
        console.log(body);
        return this._http.delete(this.url+"deleteProducto",options);    
    }

    getProductOne(body):Observable<any>{// Obtener producto 
        console.log(body)
        let params = new HttpParams().set("id_producto",body)
        let options = {headers:this.headers,params: params};
        return this._http.get(this.url+"searchProducto",options);
     }

     editProduct(body):Observable<any>{//editar Producto
        return this._http.put(this.url+"editProducto",body,{headers:this.headers});
    }
     
   


}
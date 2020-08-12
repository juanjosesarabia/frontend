import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { CookieService }  from 'ngx-cookie-service';

@Injectable()

export class UsuarioService{
   
    public url :string;
    public headers = new HttpHeaders({
    'Authorization': 'Bearer '+this.cookieService.get('cookie-T')
    });
    
    constructor(
        private _http : HttpClient,
        private cookieService: CookieService,
    ){
        this.url =Global.url;
        
        
    }
    
 getUsuarios():Observable<any>{       // Obtener usuarios
    return this._http.get(this.url+"getUser",{headers:this.headers});
 }

 getUsuariosDelete():Observable<any>{        //Obtener usuarios eliminados
    return this._http.get(this.url+"getUserDelete",{headers:this.headers});
 }

editUser(body):Observable<any>{//Editar usuario    
    return this._http.put(this.url+"editUser",body,{headers:this.headers});    
}

resetContrasena(body):Observable<any>{    // Cambiar contraseña Usuario
    return this._http.put(this.url+"resetPasswordAd",body,{headers:this.headers});    
}

cambiarTipo(body):Observable<any>{    // Cambiar tipo de usuario
    return this._http.put(this.url+"cambiarTipo",body,{headers:this.headers});    
}

eliminarUser(body):Observable<any>{   // Eliminar usuario 
    let options = {headers:this.headers, body:body };
    return this._http.delete(this.url+"deleteUser",options);    
}

restoreUser(body):Observable<any>{   // Restaurar usuario 
    return this._http.post(this.url+"restoreUser",body,{headers:this.headers});    
}
 
 



}
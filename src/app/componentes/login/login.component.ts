import { Component, OnInit, DoCheck} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  public datosForm:any;
  public mensaje:string;
  
  
  constructor(
    private _articleService:LoginService,
    private _route : ActivatedRoute,
    private  _router : Router,
    

  ) {
    this.datosForm ={
      email:'',
      password:''
    };
   
   }

  ngOnInit(): void {
    
    
  }
 

  validarInicio(){
     var gif =document.getElementById("gif");
        gif.style.display="block";
    if(this.datosForm["email"].length!=0 && this.datosForm["password"].length!=0){
    this._articleService.validarLogin(this.datosForm).subscribe(

      response =>{
        gif.style.display="none";
        if(response.estado=='ok'){
          alert("Acceso concedido");
        }
      },
      error=>{
        if(error.status==0){          
          this.mensaje="Conexion al servidor no encontrada";
          var err =document.getElementById("errorM");
           err.style.display="block";
           gif.style.display="none";
           setTimeout(function(){err.style.display="none";  }, 5000);
        }else{         
          this.mensaje=error.error.mensaje;
          var err =document.getElementById("errorM");
           err.style.display="block";
           gif.style.display="none";
           setTimeout(function(){err.style.display="none";  }, 5000);
           
        }
                     
      
      }

      );
    
    }
  }
  
}

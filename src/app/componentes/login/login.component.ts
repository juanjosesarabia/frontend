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
    if(this.datosForm["email"].length!=0 && this.datosForm["password"].length!=0){
    this._articleService.validarLogin(this.datosForm).subscribe(

      response =>{
        if(response.estado=='ok'){
          alert("Acceso concedido");
        }
      },
      error=>{
            this.mensaje=error.error.mensaje;
            var err =document.getElementById("errorM");
             err.style.display="block";
             setTimeout(function(){err.style.display="none";  }, 5000);            
      
      }

      );
    
    }
  }
  
}

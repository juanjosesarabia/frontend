import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers:[LoginService]
})
export class RegistrarUsuarioComponent implements OnInit {
 public formCrearUsuario:any;
 public mensaje:string;



  constructor(
    private _articleService:LoginService,
  ) {
    this.formCrearUsuario ={
      cedula:'',
      name:'',
      email:'',
      password:'',
      contrasena:''
     
    };
   }

  ngOnInit(): void {  }
  
 
  registrarUsuario(){
    var gif =document.getElementById("gif");
        gif.style.display="block";
    if(this.formCrearUsuario["email"].length!=0 && this.formCrearUsuario["password"].length!=0 && 
    this.formCrearUsuario["cedula"].length!=0 && this.formCrearUsuario["name"].length!=0){
      this._articleService. registerUser(this.formCrearUsuario).subscribe(
  
        response =>{
          gif.style.display="none";
          if(response.estado=='ok'){
            this.mensaje=response.mensaje;
              var bien =document.getElementById("errorM");
              bien.classList.add('alert-danger2');
             
              bien.style.display="block";
               setTimeout(function(){bien.style.display="none";  }, 5000); 

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
              err.classList.remove('alert-danger2');
              err.classList.add('alert-danger');
               err.style.display="block";
               gif.style.display="none";
              
               setTimeout(function(){err.style.display="none";  }, 5000);            
          }
        }
  
        );
      
      }
    
  }
}

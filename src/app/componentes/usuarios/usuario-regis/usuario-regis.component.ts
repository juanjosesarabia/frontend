import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-usuario-regis',
  templateUrl: './usuario-regis.component.html',
  styleUrls: ['./usuario-regis.component.css'],
  providers:[LoginService]
})
export class UsuarioRegisComponent implements OnInit {
  public formCrearUsuario:any;
  public user: FormGroup;
  public mensaje:string;
  

  

  constructor(
    private _articleService:LoginService,
  ) {
    this.mensaje="Esta es una prueba";
    this.user = new FormGroup({
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[a-zA-Z ]*$')]),
        email: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
        password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
   }

  ngOnInit(): void {


    

  }

  

  agregarUsuario(){
    this._articleService. registerUser(this.user.value).subscribe(

      response=>{
        if(response.estado=='ok'){
          this.mensaje=response.mensaje;
            var bien =document.getElementById("mensaje-data");
            var cabecera =document.getElementById("mensaje-data-header");
            cabecera.classList.remove('error-mensaje');
            cabecera.classList.add('correcto-mensaje');
           
            bien.style.display="block";
             setTimeout(function(){bien.style.display="none";  }, 5000); 

        }

      },
      error=>{
        if(error.status==0){          
          this.mensaje="Conexion al servidor no encontrada";
          var cabecera =document.getElementById("mensaje-data");            
          cabecera.classList.remove('correcto-mensaje');
            cabecera.classList.add('error-mensaje');
           err.style.display="block";
          
           setTimeout(function(){err.style.display="none";  }, 5000);
        }else{   
           console.log(error.error.mensaje);
            this.mensaje=error.error.mensaje;
            var err =document.getElementById("mensaje-data");

            var cabecera =document.getElementById("mensaje-data-header");
            cabecera.classList.remove('correcto-mensaje');
            cabecera.classList.add('error-mensaje');
             err.style.display="block";
            
             setTimeout(function(){err.style.display="none";  }, 5000);            
        }
      
      }
    );

    
  }
}

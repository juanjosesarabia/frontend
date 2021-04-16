import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AlertService } from 'ngx-alerts';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers:[LoginService]
})
export class RegistrarUsuarioComponent implements OnInit {
 public formCrearUsuario:FormGroup;
 public mensaje:string;



  constructor(
    private _articleService:LoginService,
    private alertService: AlertService,
    private spiner :NgxSpinnerService,
    private  _router : Router
  ) {
  /*  this.formCrearUsuario ={
      cedula:'',
      name:'',
      email:'',
      password:'',
      contrasena:''
     
    }; */
    this.formCrearUsuario = new FormGroup({
      cedula:new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit(): void {  }
  
 
  registrarUsuario(){
    this.spiner.show();
       this._articleService.registerUser(this.formCrearUsuario.value).subscribe(
        response =>{
          if(response.estado=='ok'){
            this.spiner.hide();
            this.alertService.success(response.mensaje);
            this._router.navigate(['/']);
          }
        },
        error=>{
          if(error.status==0){          
            this.mensaje="Conexion al servidor no encontrada";
            this.alertService.danger(this.mensaje);  
            this.spiner.hide();
          }else{   
            this.mensaje=error.error.mensaje;
            this.alertService.danger(this.mensaje); 
            this.spiner.hide();
          }
        }
        );
      
  }
}

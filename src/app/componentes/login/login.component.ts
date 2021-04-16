import { Component, OnInit, DoCheck} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AlertService } from 'ngx-alerts';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { CookieService }  from 'ngx-cookie-service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public mensaje:string;
  public datosForm: FormGroup;
  hide = true;
  constructor(
    private _articleService:LoginService,
    private _route : ActivatedRoute,
    private  _router : Router,
    private alertService: AlertService,
    private cookieService: CookieService,
    private spiner :NgxSpinnerService
  ) {
    this.datosForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit(): void { }
 
  validarInicio(){
    this.spiner.show();
    this._articleService.validarLogin(this.datosForm.value).subscribe(
      response =>{
        if(response.estado=='ok'){
          this.cookieService.set('cookie-T',response.success['token'],1);         
          this.cookieService.set('cookie-N',response.datos['name'],1);          
          this.cookieService.set('cookieT',response.datos['tipo'],1);         
          this._router.navigate(['app/dashboard']);
          this.spiner.hide();
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

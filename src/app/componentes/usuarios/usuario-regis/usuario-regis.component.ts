import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-regis',
  templateUrl: './usuario-regis.component.html',
  styleUrls: ['./usuario-regis.component.css'],
  providers:[LoginService]
})
export class UsuarioRegisComponent implements OnInit {
  public user: FormGroup;

  constructor(
    private _articleService:LoginService,
    private alertService: AlertService,
    private  _router : Router
  ) {
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
    this._articleService.registerUser(this.user.value).subscribe(
      response=>{
        this.alertService.success(response.mensaje); 
        this._router.navigate(['app/usuario'])
          .then(() => {
            window.location.reload();
          });      
      },
      error=>{
        this.alertService.danger(error.error.mensaje);      
      }
    );

    
  }
}

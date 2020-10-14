import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-usuario-regis',
  templateUrl: './usuario-regis.component.html',
  styleUrls: ['./usuario-regis.component.css'],
  providers:[LoginService]
})
export class UsuarioRegisComponent implements OnInit {
  public user: FormGroup;
  @ViewChild('closemodal') closemodal;

  constructor(
    private _articleService:LoginService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService
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
        this.closemodal.nativeElement.click();
        this.user.patchValue({ cedula:"", name:"" ,email: "",password: ""});        
      },
      error=>{
        this.alertService.danger(error.error.mensaje);      
      }
    );

    
  }
}

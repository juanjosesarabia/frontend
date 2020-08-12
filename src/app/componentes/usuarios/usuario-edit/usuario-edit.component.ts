import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../../services/usuario.service';
import { PageEvent } from '@angular/material/paginator';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers :[UsuarioService]
})
export class UsuarioEditComponent implements OnInit {

  filtro ="";
  public usuarios=[];
  public data :boolean;
  p:number=1;
  public formEditUsuario:any;
  public user: FormGroup;
  public resetContrasena: FormGroup;
  public cambiarTipo:FormGroup;
  public eliminarUsuario: FormGroup;
  
  public editU:boolean;
  public cambiarC:boolean;
  public tipo:boolean;
  public eliminarUser:boolean;

  page_size:number=5;
  page_number:number=1;
  hide = true;
  constructor(
    private dataService: UsuarioService,
    private alertService: AlertService,
    private spiner :NgxSpinnerService,
    
  ) {
    this.data=false;
    this.cambiarC=false;
    this.editU=false;
    this.tipo=false;
    this.eliminarUser=false;
    this.user = new FormGroup({
      id: new  FormControl(),
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[a-zA-Z ]*$')]),
        email: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        tipo_usuario:new FormControl('', [Validators.required])
    });
   
    this.resetContrasena = new FormGroup({
      id: new  FormControl(),
      nombres: new  FormControl({value:'', disabled: true}),
      cc: new  FormControl({value:'', disabled: true}),
      contrasenaNueva: new FormControl('', [Validators.required, Validators.minLength(6)]),
        
    });
    
    this.cambiarTipo = new FormGroup({
      id: new  FormControl(),
      nombres: new  FormControl({value:'', disabled: true}),
      cc: new  FormControl({value:'', disabled: true}),
      tipoUsuario: new FormControl('', [Validators.required]),
        
    });

    this.eliminarUsuario = new FormGroup({
      id: new  FormControl(),
      nombres: new  FormControl({value:'', disabled: true}),
      cc: new  FormControl({value:'', disabled: true})
        
    });

    
   }

  ngOnInit(): void {    
    this.cargarDatosUsuarios();
  }
 

  cargarDatosUsuarios(){
    this.spiner.show();
    this.dataService.getUsuarios().subscribe(
     response=>{     
       this.usuarios =response;
       this.data=true;
       setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spiner.hide();
      }, 1000);
              
     },
     
     error=>{
       
      this.spiner.hide();
      this.data=false;
      if(error.status==0){
        this.alertService.danger("Error de comunicación con el servidor");  
      }
      if(error.status==404){
        this.alertService.danger(error.error.mensaje);  
      }
     
     }
    );

  }

  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }

  abrirForm(fila){
    this.editU=true;
    this.tipo=false;
    this.cambiarC=false;
    this.eliminarUser=false;
   this.user.patchValue({ id: fila.id,cedula: fila.cedula, password:"", name:fila.nombres ,email:fila.correo,tipo_usuario:fila.tipo_usuario});    
  }
 

  editarUsuario(){     
    this.dataService.editUser(this.user.value).subscribe(
    response =>{
      this.alertService.success(response.mensaje);
      this.editU=false;
      this.cargarDatosUsuarios();
    },
    error =>{
        this.alertService.danger(error.error.mensaje.password);       
    }

    );
  }

   
  abrirFormContrasena(fila){
    this.cambiarC=true;
    this.editU=false;
    this.tipo=false;
    this.eliminarUser=false;
   this.resetContrasena.patchValue({ id: fila.id,cc: fila.cedula, password:"", nombres:fila.nombres });    
  }

  cerrar(){
    this.cambiarC=false;
  }

  cerrar1(){
    this.editU=false;
  }
  cerrar2(){
    this.tipo=false;
  }
  cerrar3(){
    this.eliminarUser=false;
  }
  

  cambiarContrasena(a:Event){

    this.dataService.resetContrasena(this.resetContrasena.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.cambiarC=false;
        this.cargarDatosUsuarios();
      },
      error =>{
          this.alertService.danger(error.error.mensaje.password);       
      }
  
      );
  }

  abrirFormTipo(fila){
    this.tipo=true;
    this.editU=false;
    this.eliminarUser=false;
    this.cambiarC=false;
   this.cambiarTipo.patchValue({ id: fila.id,cc: fila.cedula, nombres:fila.nombres });
  }

  cambiarTipoU(){
    this.dataService.cambiarTipo(this.cambiarTipo.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.tipo=false;
        this.cargarDatosUsuarios();
      },
      error =>{
          this.alertService.danger(error.error.mensaje.password);       
      }
  
      );
  }

  abrirFormEliminar(fila){
    this.eliminarUser=true;
    this.editU=false;
    this.tipo=false;
    this.cambiarC=false;
    this.eliminarUsuario.patchValue({ id: fila.id,cc: fila.cedula, nombres:fila.nombres });
  }

  eliminarU(){
    this.dataService.eliminarUser(this.eliminarUsuario.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.eliminarUser=false;
        this.cargarDatosUsuarios();
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }
  
      );
  }

}


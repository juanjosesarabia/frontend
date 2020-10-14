import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService} from '../../../services/usuario.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';
import {FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.css'],
  providers :[UsuarioService]
})
export class UsuarioSearchComponent implements OnInit {
  filtro ="";
  public usuarios=[];
  public restaurarUsuario: FormGroup;
  public data :boolean;
  p:number=1;
  public nombre:string;
  public cedula:string;
  public email:string;

  page_size:number=10;
  page_number:number=1;
  @ViewChild('closemodal') closemodal;
  constructor(
    private dataService: UsuarioService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService
  ) {
    this.data=false;
    this.restaurarUsuario = new FormGroup({
      id: new  FormControl(),
      nombres: new  FormControl({value:'', disabled: true}),
      cc: new  FormControl({value:'', disabled: true}),
      correo: new FormControl({value:'', disabled: true}),
        
    });
   }

  ngOnInit(): void {
    this.cargarDatosUsuarios();
  }
 

  cargarDatosUsuarios(){
    this.spiner.show();
    this.dataService.getUsuariosDelete().subscribe(
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

  dataModal(fila){
    this.nombre=fila.name;
    this.cedula=fila.cedula;
    this.email=fila.email;
    this.restaurarUsuario.patchValue({ id: fila.id,cc: fila.cedula, nombres:fila.name ,correo:fila.email});
  }
  restoreUser(){
    this.dataService.restoreUser(this.restaurarUsuario.value).subscribe(
      response =>{
        this.closemodal.nativeElement.click();
        this.cargarDatosUsuarios();
        this.alertService.success(response.mensaje);
       
       
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }
  
      );
  }
}

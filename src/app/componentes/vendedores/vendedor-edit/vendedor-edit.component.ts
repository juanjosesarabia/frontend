import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../../../services/vendedores.service';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';



@Component({
  selector: 'app-vendedor-edit',
  templateUrl: './vendedor-edit.component.html',
  styleUrls: ['./vendedor-edit.component.css'],
  providers :[VendedoresService]
})
export class VendedorEditComponent implements OnInit {
 
  filtro ="";
  public datos =[];
  public data :boolean;
  public editV:boolean;
  public eliminarV:boolean;
  public vendedor: FormGroup;
  p:number=1;
  public vendedorE: FormGroup;
  
 
   page_size:number=5;
   page_number:number=1;
 
  constructor(
    private vendedorServ :VendedoresService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
    ) { 
    this.data=false;
    this.editV=false;
    this.eliminarV=false;
    this.vendedor = new FormGroup({
      id: new  FormControl(),
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      nombres: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[a-zA-Z ]*$')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
    });

    this.vendedorE = new FormGroup({
      id: new  FormControl(),
      cedula: new FormControl({value:'', disabled: true}),
      nombres: new FormControl({value:'', disabled: true}),
      apellidos: new FormControl({value:'', disabled: true}),
      telefono: new FormControl({value:'', disabled: true})
    });
    }

  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }

  ngOnInit(): void {
    this.cargarDataVend();
  }

  public cargarDataVend(){
    this.spiner.show();
    this.vendedorServ.getVendedores().subscribe(
      
      response=>{   
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spiner.hide();
        }, 3000);
        this.datos=response;
        this.data=true;      
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

  abrirForm(fila){
   this.eliminarV=false;
   this.editV=true;
   this.vendedor.patchValue({ id: fila.id,cedula: fila.cedula, nombres:fila.nombres ,apellidos:fila.apellidos,telefono:fila.telefono});    
  }

  editarVendedor(){     
    this.vendedorServ.editVendedor(this.vendedor.value).subscribe(
    response =>{
      this.alertService.success(response.mensaje);
      this.editV=false;
      this.cargarDataVend();
    },
    error =>{
        this.alertService.danger(error.error.mensaje);       
    }

    );
  }

  cerrar(){
    this.editV=false;
  }

  abrirFormEliminar(fila){
    this.editV=false;
    this.eliminarV=true;
    this.vendedorE.patchValue({ id: fila.id,cedula: fila.cedula, nombres:fila.nombres ,apellidos:fila.apellidos,telefono:fila.telefono});    
   }

  cerrar1(){
    this.eliminarV=false;
  }

  eliminarVen(){

    this.vendedorServ.eliminarVendedor(this.vendedorE.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.eliminarV=false;
        this.cargarDataVend();
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }
      );
  }
  actualizarV(event):void{
    this.cargarDataVend();
   }

}

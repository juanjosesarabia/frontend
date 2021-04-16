import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IngresoService } from '../../../services/ingreso.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';
import { findLast } from '@angular/compiler/src/directive_resolver';


@Component({
  selector: 'app-ingreso-delete',
  templateUrl: './ingreso-delete.component.html',
  styleUrls: ['./ingreso-delete.component.css']
})
export class IngresoDeleteComponent implements OnInit {

  filtro ="";
  public datos =[];
  public data :boolean;
  p:number=1;
  total:number;
 
   page_size:number=5;
   page_number:number=1;
   public id :number;
   public numero_acta:number;
   public fechaIngreso:Date;
   public cantidadIngresada:number;
   public cedula:number;
   public nombres:string;
   public apellidos:string;
   public telefono:number;
   public deleted_at:string;
   @ViewChild('closemodal') closemodal;
  constructor(
    private ingresoServ :IngresoService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService
  ) { 
    this.data=false;
  }
  
  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  ngOnInit(): void {
    this.cargarDataIngresoDelete();
  }
  public cargarDataIngresoDelete(){
    this.spiner.show();
    this.ingresoServ.getIngresosDelete().subscribe(
      
      response=>{   
       
        this.datos=response;
        this.data=true;
        this.total=this.datos.length;      
        setTimeout(() => {
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

  dataModal(fila){
    this.id=fila.id_ingreso;
    this.numero_acta=fila.numero_acta;
    this.fechaIngreso=fila.fechaIngreso;
    this.cantidadIngresada=fila.cantidadIngresada;
    this.cedula=fila.cedula;
    this.nombres=fila.nombres;
    this.apellidos=fila.apellidos;
    this.telefono=fila.telefono;
    this.deleted_at=fila.deleted_at;
  }

  restoreIngreso(){
    this.ingresoServ.restoreIngreso({"id_ingreso":this.id}).subscribe(
      response =>{
        this.closemodal.nativeElement.click(); 
        this.cargarDataIngresoDelete();
        this.alertService.success(response.mensaje);      
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }  
      );
  }
  
}

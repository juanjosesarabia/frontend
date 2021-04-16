import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IngresoService } from '../../../services/ingreso.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-ingreso-search',
  templateUrl: './ingreso-search.component.html',
  styleUrls: ['./ingreso-search.component.css']
})
export class IngresoSearchComponent implements OnInit {

  filtro ="";
  public datos =[];
  public data :boolean;
  p:number=1;
   total:number;
 
   page_size:number=5;
   page_number:number=1;

    public id:number;
    public dataIngreso;
    public editIngreso;

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
    this.cargarDataIngreso();
  }
  ver(id_ingreso){
   this.id=id_ingreso;
  }
  eliminar(datos){
    this.dataIngreso=datos;
   }
   editar(fila){
     this.editIngreso=fila;
   }

  public cargarDataIngreso(){
    this.spiner.show();
    this.ingresoServ.getIngresos().subscribe(
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

  actualizarP(event):void{
   this.cargarDataIngreso();
  }
}

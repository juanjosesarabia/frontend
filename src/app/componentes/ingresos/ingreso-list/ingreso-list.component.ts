import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IngresoService } from '../../../services/ingreso.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css']
})
export class IngresoListComponent implements OnInit {

  @Input() id: number; 
  
  filtro ="";
  public datos =[];
  public datosPro =[];
  public datosVen=[];
  public data :boolean;


   constructor(
    private ingresoServ :IngresoService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService
  ) { 
    this.data=false;
  }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['id'] 
    if(!change.firstChange){
      this.cargarDataIngreso();
    }
  }

  public cargarDataIngreso(){
    this.spiner.show();
    this.ingresoServ.getIngreOne(this.id).subscribe(
      
      response=>{
        this.datos=response.ingreso;
        this.datosPro=response.productos;
        this.datosVen=response.vendedor;
        this.data=true;      
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

}

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
 public datos =[];
 public data :boolean;
 p:number=1;
  total:number;
  filtroLog ="";

  page_size:number=10;
  page_number:number=1;
  
  constructor(
    private dataService: DashboardService,
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
    this.cargarDataLog();
  }
 public cargarDataLog(){
  this.spiner.show();
   this.dataService.getLog().subscribe(
     response=>{      
       if(response.estado=="ok"){
       this.datos=response.datos;
       this.data=true;
       this.total=this.datos.length;
       setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spiner.hide();
      }, 1000);
       }
     },
     error=>{
      this.spiner.hide();
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

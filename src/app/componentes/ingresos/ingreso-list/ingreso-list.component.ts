import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IngresoService } from '../../../services/ingreso.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css']
})
export class IngresoListComponent implements OnInit {

  public datos =[];
  public data :boolean;
  p:number=1;
   total:number;
 
   page_size:number=10;
   page_number:number=1;

   constructor(
    private ingresoServ :IngresoService,
    private spiner :NgxSpinnerService
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

  public cargarDataIngreso(){
    this.spiner.show();
    this.ingresoServ.getIngresos().subscribe(
      
      response=>{   
  
       
          this.datos=response;
        this.data=true;
        this.total=this.datos.length;
      
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spiner.hide();
        }, 1000);
        
 
      },
      error=>{
        alert("Algo salió mal"+error);

        this.data=false;
 
      }
 
    );
 
  }

}

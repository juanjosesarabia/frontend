import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../../../services/vendedores.service';

import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {

  public datos =[];
  public data :boolean;
  p:number=1;
   total:number;
 
   page_size:number=5;
   page_number:number=1;

   constructor(
    private vendedorServ :VendedoresService,
    private spiner :NgxSpinnerService
  ) { 
    this.data=false;
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

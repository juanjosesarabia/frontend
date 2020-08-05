import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { NgxSpinnerService } from "ngx-spinner";
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


  public datos =[];
  public data :boolean;
  p:number=1;
   total:number;
 
   page_size:number=5;
   page_number:number=1;

  constructor(
    private productoServ :ProductoService,
    private spiner :NgxSpinnerService
  ) { 
    this.data=false;
  }

  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }

  ngOnInit(): void {
    this.cargarDataPro();
  }


  public cargarDataPro(){
    this.spiner.show();
    this.productoServ.getUsuarios().subscribe(
      
      response=>{ 
        console.log(response);    
       
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
 
      }
 
    );
 
  }

}

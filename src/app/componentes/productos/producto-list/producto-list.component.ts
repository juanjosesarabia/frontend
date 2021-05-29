import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { NgxSpinnerService } from "ngx-spinner";
import { PageEvent } from '@angular/material/paginator';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  filtro ="";
  public datos =[];
  public data :boolean;
  public productDelete;
  public productEdit;

  p:number=1;
   total:number;
 
   page_size:number=5;
   page_number:number=1;

  constructor(
    private productoServ :ProductoService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
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
        this.datos=response;
        this.data=true;
        this.total=this.datos.length;
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
  actualizarP($event){
    this.cargarDataPro();
  }

  deleteProduct(fila){
    this.productDelete=fila;
  }
  editProduct(fila){
    this.productEdit=fila;
  }

}

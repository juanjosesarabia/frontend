import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-list-to-product-delete',
  templateUrl: './list-to-product-delete.component.html',
  styleUrls: ['./list-to-product-delete.component.css']
})
export class ListToProductDeleteComponent implements OnInit {
    filtro ="";
    p:number=1;
    total:number;
    public datos =[];
    page_size:number=5;
    page_number:number=1;
    public data :boolean;
    @ViewChild('closemodal') closemodal;
    public id :number;
    public producto;
    public codigoBarra;
    public cantidad;
    public cedula;
    public nombres;
    public apellidos;
  constructor(
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
    private productService:ProductoService
  ) { 
    this.data=false;
  }

  ngOnInit(): void {
    this.cargarDataProductDelete();
  }
  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  dataModal(fila){
    this.id=fila.id_producto;
   this.producto=fila.nombre;
   this.codigoBarra=fila.codigoBarra;
   this.cantidad=fila.cantidadUnitaria;
   this.cedula =fila.cedula;
   this.nombres=fila.nombres;
   this.apellidos=fila.apellidos;
  }

  public cargarDataProductDelete(){
    this.spiner.show();
    this.productService.getProductosDelete().subscribe(
      response=>{   
        setTimeout(() => {
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
      });
  }
  restoreProduct(){
    this.productService.restoreProducto({"id":this.id}).subscribe(
      response =>{
        this.closemodal.nativeElement.click(); 
        this.cargarDataProductDelete();
        this.alertService.success(response.mensaje);     
        console.log(response.mensaje) 
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }  
      );
  }
}

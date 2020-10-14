import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VendedoresService } from '../../../services/vendedores.service';
import { AlertService } from 'ngx-alerts';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css'],
  providers :[VendedoresService]
})
export class VendedorListComponent implements OnInit {
  
  filtro="";
  public datos =[];
  public data :boolean;
  p:number=1;
 
   page_size:number=5;
   page_number:number=1;
   public id :number;
   public cedula:String;
   public nombres:String;
   public apellidos:String;
   public telefono:String;
   @ViewChild('closemodal') closemodal;

   constructor(
    private vendedorServ :VendedoresService,
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
    this.cargarDataVend();
  }


  public cargarDataVend(){
    this.spiner.show();
    this.vendedorServ.getVendedoresDelete().subscribe(
      
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
      }
 
    );
 
  }

  dataModal(fila){
    this.id =fila.id;
    this.cedula=fila.cedula;
    this.nombres=fila.nombres;
    this.apellidos=fila.apellidos;
    this.telefono=fila.telefono;
  }
  
  restoreVendedor(){
    this.vendedorServ.restoreVendedor({"id":this.id}).subscribe(
      response =>{
        this.closemodal.nativeElement.click(); 
        this.cargarDataVend();
        this.alertService.success(response.mensaje);      
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }  
      );
  }
}

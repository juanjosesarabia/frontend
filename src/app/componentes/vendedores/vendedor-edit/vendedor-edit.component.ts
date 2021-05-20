import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../../../services/vendedores.service';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';



@Component({
  selector: 'app-vendedor-edit',
  templateUrl: './vendedor-edit.component.html',
  styleUrls: ['./vendedor-edit.component.css'],
  providers :[VendedoresService]
})
export class VendedorEditComponent implements OnInit {
 
  filtro ="";
  public datos =[];
  public data :boolean;
  public editV:boolean;
  public eliminarV:boolean;
  p:number=1;
  public vendedorE: FormGroup;
  public vendedorDelete;
  public vendedorEdit;
 
   page_size:number=5;
   page_number:number=1;
 
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
  delete(fila){
    this.vendedorDelete=fila;
  }
  edit(fila){
    this.vendedorEdit=fila;
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
  actualizarV(event):void{
    this.cargarDataVend();
   }

}

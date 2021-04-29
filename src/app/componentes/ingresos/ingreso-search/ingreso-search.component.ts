import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IngresoService } from '../../../services/ingreso.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';
import { PdfMakeWrapper, Table,Columns,Img } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";
import {formatDate } from '@angular/common';

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
    PdfMakeWrapper.setFonts(pdfFonts);
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

   imprimirPdf(fila){
    this.spiner.show();
    this.ingresoServ.getIngreOne(fila).subscribe(
      
      response=>{
        console.log(response);  
        setTimeout(() => {
          this.spiner.hide();
        }, 1000); 
       this.generatePDF(response);       
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

  generatePDF(datos){
    const pdf = new PdfMakeWrapper();
  let vendedor =datos.vendedor.map(row=>[row.cedula, row.nombres, row.apellidos,row.telefono]);
   console.log( datos)/*
  const hedaderPdf =  new Table([
    [ new Columns([ 'Logo', 'Ingreso','fecha' ]).alignment('center').bold().end],
    [ new Columns([ ' ' ]).alignment('center').bold().end],
    [ new Columns([ 'Datos del Ingreso' ]).alignment('center').bold().end],
    [ new Columns([ 'Fecha Ingreso', 'N° Acta','Cantidad' ]).alignment('center').bold().end],
    [ new Columns([ `${datos.ingreso.fechaIngreso}`, `${datos.ingreso.numero_acta}`,`${datos.ingreso.cantidadIngresada}` ]).alignment('center').end],
 //   [ datos.productos.map(row=>[row.fechaIngreso, row.numero_acta, row.cantidadIngresada])],
    [ new Columns([ 'Información del Vendedor' ]).alignment('center').bold().end],
    [ new Columns([ 'Cédula','Nombres', 'Apellidos','Teléfono' ]).alignment('center').bold().end],
    [ new Columns([ ...vendedor[0] ]).alignment('center').end],
    [ new Columns([ 'Información de Productos' ]).alignment('center').bold().end],
    [ new Columns([ 'Nombre','Descripción', 'Código Barra','Cantidad','Riesgo' ]).alignment('center').bold().end],
    [ new Columns([ 'XXX', 'XXX','XXXXX','XXXX','XXXXX' ]).alignment('center').end],
    
])
   */
const hedaderPdf =  new Table([
  [ new Columns([ 'Logo', 'Ingreso','fecha' ]).alignment('center').bold().end],
  [ new Columns([ ' ' ]).alignment('center').bold().end],
  [ new Columns([ 'Datos del Ingreso' ]).alignment('center').bold().end],
  [ new Columns([ 'Fecha Ingreso', 'N° Acta','Cantidad' ]).alignment('center').bold().end],
  [ new Columns([ `${datos.ingreso.fechaIngreso}`, `${datos.ingreso.numero_acta}`,`${datos.ingreso.cantidadIngresada}` ]).alignment('center').end],
//   [ datos.productos.map(row=>[row.fechaIngreso, row.numero_acta, row.cantidadIngresada])],
  [ new Columns([ 'Información del Vendedor' ]).alignment('center').bold().end],
  [ new Columns([ 'Cédula','Nombres', 'Apellidos','Teléfono' ]).alignment('center').bold().end],
  [ new Columns([ ...vendedor[0] ]).alignment('center').end],
  [ new Columns([ 'Información de Productos' ]).alignment('center').bold().end],
  [ new Columns([ 'Nombre','Descripción', 'Código Barra','Cantidad','Riesgo' ]).alignment('center').bold().end],
  [ new Columns([ 'XXX', 'XXX','XXXXX','XXXX','XXXXX' ]).alignment('center').end],
  
])
.widths(['*'])
.heights(rowIndex =>{
    return rowIndex=== 0 ? 40 : 0;
})
.heights(rowIndex =>{
  return rowIndex=== 1 ? 40 : 0;
})
.layout({
   fillColor:(rowIndex:number,node:any,columnIndex:number)=>{
     return rowIndex===0?'#C1C6C9':'';
   }
}).end;

 



   
 
  
    pdf.add(hedaderPdf);
    pdf.create().open();
  }
}

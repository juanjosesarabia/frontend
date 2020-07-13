import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css'],
  providers :[DashboardService]
})
export class DataDashboardComponent implements OnInit {
  public vendedoresNu:number;
  public ingresosN:number;
  public productosN:number;
  public salidasV:number;
  public salidasD:number;
  public vendedores=[];
  public ingresos =[];
  public salidasVendedor=[];
  public salidasDestruccion=[];
  public vendedores2 :boolean;
  public ingresos2:boolean;
  public salidasVendedor2:boolean;
  public salidasDestruccion2:boolean;

  


  constructor(
    private dataService: DashboardService
  ) { 
    this.vendedoresNu=0;
    this.ingresosN=0;
    this.productosN=0;
    this.salidasV=0;
    this.salidasD=0;
    this.vendedores2=false;
    this.salidasDestruccion2=false;
    this.ingresos2=false;
    this.salidasVendedor2=false;
  }

  ngOnInit(): void {
    this.cargarData();
  }
   cargarData(){
    this.dataService.getData().subscribe(
      response=>{     
        
        this.vendedoresNu=response.vendedoresN;
        this.ingresosN=response.ingresosN;
        this.productosN=response.productosN;
        this.salidasV=response.salidaV;
        this.salidasD=response.salidaD;  
        this.vendedores=response.vendedores;
        this.ingresos=response.ingresos;
        this.salidasVendedor=response.salidasVendedor;         
        this.salidasDestruccion=response.salidasDestruccion;

        if(response.vendedores!="Sin Datos"){
          this.vendedores2=true;
        }
        if(response.ingresos!="Sin Datos"){
          this.ingresos2=true;
        }
        if(response.salidasVendedor!="Sin Datos"){
          this.salidasVendedor2=true;
        }
        if(response.salidasDestruccion!="Sin Datos"){
          this.salidasDestruccion2=true;
        }
              
      },
      error =>{
      alert("Servidor no encontrado");
      }
 
    );
   }
}

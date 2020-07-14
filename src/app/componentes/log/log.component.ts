import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
 public datos =[];
 public data :boolean;
  constructor(
    private dataService: DashboardService
  ) { 
    this.data=false;
  }

  ngOnInit(): void {
    this.cargarDataLog();
  }
 public cargarDataLog(){
   this.dataService.getLog().subscribe(
     
     response=>{      
       if(response.estado=="ok"){
       this.datos=response.datos;
       this.data=true;
       }

     },
     error=>{
       alert("Algo salió mal"+error);

     }

   );

 }
}

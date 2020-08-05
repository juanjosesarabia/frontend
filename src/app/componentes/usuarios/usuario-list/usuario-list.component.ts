import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../../services/usuario.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers :[UsuarioService]
})
export class UsuarioListComponent implements OnInit {
  public usuarios=[];
   public data :boolean;
   p:number=1;

   page_size:number=10;
   page_number:number=1;
   
  

  constructor(

    private dataService: UsuarioService,
    private spiner :NgxSpinnerService

  ) { 
    this.data=false;
    
  }

  ngOnInit(): void {

    this.cargarDatosUsuarios();
  }


  cargarDatosUsuarios(){
    this.spiner.show();
    this.dataService.getUsuarios().subscribe(
     response=>{
     
       this.usuarios =response;
       this.data=true;
       setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spiner.hide();
      }, 1000);
       
     },
     
     error=>{
       console.log(error);
       
      this.data=false;
       if(error.estado=="error" ||error.status==0){
         this.data=false;
       } 
     
     }
    );

    

  }

  paginator(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
}

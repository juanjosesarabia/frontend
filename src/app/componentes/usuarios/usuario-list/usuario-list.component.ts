import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers :[UsuarioService]
})
export class UsuarioListComponent implements OnInit {
  public usuarios=[];
   public data :boolean;

  

  constructor(

    private dataService: UsuarioService

  ) { 
    this.data=false;
    
  }

  ngOnInit(): void {

    this.cargarDatosUsuarios();
  }


  cargarDatosUsuarios(){
    this.dataService.getUsuarios().subscribe(
     response=>{
       this.usuarios =response;
       this.data=true;
       
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
}

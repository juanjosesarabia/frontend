import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild  } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso-eliminar',
  templateUrl: './ingreso-eliminar.component.html',
  styleUrls: ['./ingreso-eliminar.component.css'],
})
export class IngresoEliminarComponent implements OnInit {
  @Input() data:any[];
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('closemodal') closemodal;

  public fecha:string;
  public acta:string;
  public cantidad:string;
  public cedula:string;
  public nombres:string;
  public apellidos:string;
  public telefono:string;
  public id:number;
  
  constructor(
    private ingresoServ :IngresoService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
  ) { 
  this.id=0;
  
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
      let arrelgo = Object.values(this.data);
      this.fecha=arrelgo[3];
      this.acta=arrelgo[4];
      this.cantidad=arrelgo[5];
      this.cedula=arrelgo[7];
      this.nombres=arrelgo[8];
      this.apellidos=arrelgo[9];
      this.telefono=arrelgo[10];
      this.id=arrelgo[0];
    }
  }

  eliminarIngreso(){
   this.ingresoServ.eliminarIngreso({"id_ingreso":this.id}).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.closemodal.nativeElement.click();
        this.emitUpdate.emit(1);
      },
      error =>{
          this.alertService.danger(error.error.mensaje);       
      }
  
      );
  }
}

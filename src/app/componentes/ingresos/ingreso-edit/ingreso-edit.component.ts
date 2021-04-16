import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { IngresoService } from '../../../services/ingreso.service';
import {VendedoresService } from '../../../services/vendedores.service'

@Component({
  selector: 'app-ingreso-edit',
  templateUrl: './ingreso-edit.component.html',
  styleUrls: ['./ingreso-edit.component.css']
})
export class IngresoEditComponent implements OnInit {
  @Input() data;
  @ViewChild('closemodal') closemodal;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();
  public data1;
  public nombre;
  public cedula;
  public inputDat;

  public editIngreso: FormGroup;
  public vendedor: FormGroup;
  public idVendedor: number;
  constructor(
    private spiner :NgxSpinnerService,
    private vendedores:VendedoresService,
    private ingreso:IngresoService,
    private alertService: AlertService,
  ) { 
    this.inputDat= false;
    this.editIngreso = new FormGroup({      
      id_ingreso: new FormControl(''),
      fechaIngreso: new FormControl('', [Validators.required, Validators.minLength(8)]),
      numero_acta: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]),
      ubicacionOperativo: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z ]*$')]),
      id_vendedor: new FormControl(''),
    });
    this.vendedor = new FormGroup({      
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')])
    });
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
      let arrelgo = Object.values(this.data);
       this.data1=arrelgo;
       this.cedula=this.data1[7];
       this.nombre=this.data1[8]+" "+this.data1[9];
       this.idVendedor=this.data1[11];      
       this.editIngreso.patchValue({id_ingreso: this.data1[0],fechaIngreso:this.data1[3], numero_acta:this.data1[4] ,ubicacionOperativo:this.data1[6],id_vendedor:this.idVendedor}); 
    }
  }
  editarIngreso(){
    this.spiner.show();
    this.ingreso.editIngreso(this.editIngreso.value).subscribe(
     
      response=>{          
        console.log(response);   
        setTimeout(() => {
          this.spiner.hide();
        }, 1000);        
        this.alertService.success(response.mensaje);
        this.emitUpdate.emit(1);
      },
      error=>{
        this.spiner.hide();
        if(error.status==0){
          this.alertService.danger("Error de comunicación con el servidor");  
        }
        if(error.status==404){
          this.alertService.danger(error.error.mensaje);  
        }     
      }
    );
  }

  buscarVendedor(){
    this.spiner.show();
    this.vendedores.searchVendedor(this.vendedor.get('cedula').value).subscribe(
      
      response=>{          
        setTimeout(() => {
          this.spiner.hide();
        }, 1000);        
        this.alertService.success("Vendedor Encontrado");
        this.cedula=response.cedula;
        this.nombre=response.nombres+" "+response.apellidos;
        this.idVendedor=response.id;
        this.inputDat= false;
        this.editIngreso.patchValue({id_vendedor:this.idVendedor}); 
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

  activarInput(){
    if(this.inputDat==false){
      this.inputDat= true;
    }else{
      this.inputDat= false;
    }    
  }
  cerrar(){
    this.inputDat= false;
  }
}

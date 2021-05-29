import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-delete',
  templateUrl: './producto-delete.component.html',
  styleUrls: ['./producto-delete.component.css']
})
export class ProductoDeleteComponent implements OnInit {
  @Input() data:any[];
  public producto: FormGroup;
  @ViewChild("closet") closet: ElementRef;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private alertService: AlertService,
    private productService:ProductoService
  ) {
    this.producto = new FormGroup({
      id_producto:new FormControl(),
      nombre: new FormControl({value:'', disabled: true}),
      codigoBarra: new FormControl({value:'', disabled: true}),
      cantidadUnitaria: new FormControl({value:'', disabled: true}),
      riesgo: new FormControl(),
      cedula: new FormControl({value:'', disabled: true}),
      nombres: new FormControl({value:'', disabled: true}),
      apellidos: new FormControl({value:'', disabled: true}),
      telefono:new FormControl({value:'', disabled: true}),
      fechaIngreso:new FormControl({value:'', disabled: true}),
      numero_acta: new FormControl({value:'', disabled: true}),
    });
   }
   
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
     this.producto.patchValue({...this.data});
    }
  }

  eliminarPro(){
    this.productService.eliminarProducto(this.producto.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.closet.nativeElement.click();
        this.emitUpdate.emit(1);     
      },
      error=>{
        this.alertService.danger(error.error.mensaje);
      }
    )
    

  }

}

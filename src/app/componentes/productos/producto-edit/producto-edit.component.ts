import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  
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
      nombre: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      riesgo: new FormControl('', [Validators.required, Validators.minLength(2)]),
      codigoBarra: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]),
      cantidadUnitaria: new FormControl('', [Validators.required, Validators.minLength(1),Validators.pattern('^[0-9]+$')])
    });
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
    let a =Object.values(this.data);    
     this.productService.getProductOne(a[0]).subscribe(
       response=>{
        this.producto.patchValue({...response});
       },
       error=>{
         console.log(error.error.mensaje)
       }
     )
    }
  }

  actualizarProducto( formDirective: FormGroupDirective){
    this.productService.editProduct(this.producto.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        formDirective.resetForm();
        this.producto.reset();      
        this.closet.nativeElement.click();
        this.emitUpdate.emit(1); 
      },
      error=>{
        if(error.status==0){
          this.alertService.danger("Error de comunicación con el servidor");  
        }
        if(error.status==404){
          this.alertService.danger(error.error.mensaje);  
        }
      }
    );
  }


  clean(formDirective: FormGroupDirective){
    formDirective.resetForm();
  }
}

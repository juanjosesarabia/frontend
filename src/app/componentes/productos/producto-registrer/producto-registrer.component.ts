import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-registrer',
  templateUrl: './producto-registrer.component.html',
  styleUrls: ['./producto-registrer.component.css']
})
export class ProductoRegistrerComponent implements OnInit {
  public producto: FormGroup;
  @ViewChild("closet") closet: ElementRef;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    private alertService: AlertService,
    private productService:ProductoService
  ) {
    this.producto = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      riesgo: new FormControl('', [Validators.required, Validators.minLength(2)]),
      codigoBarra: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]),
      cantidadUnitaria: new FormControl('', [Validators.required, Validators.minLength(1),Validators.pattern('^[0-9]+$')]),
      numero_acta:new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]),
    });
   }

  ngOnInit(): void {
  }
   
  registrarProducto( formDirective: FormGroupDirective){
    this.productService.registerProducto(this.producto.value).subscribe(
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

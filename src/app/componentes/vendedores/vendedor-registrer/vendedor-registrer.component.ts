import { Component, OnInit, Output,EventEmitter, ViewChild,ElementRef} from '@angular/core';
import {FormControl, Validators,FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { VendedoresService } from '../../../services/vendedores.service';

@Component({
  selector: 'app-vendedor-registrer',
  templateUrl: './vendedor-registrer.component.html',
  styleUrls: ['./vendedor-registrer.component.css'],
  providers:[FormGroupDirective]
})
export class VendedorRegistrerComponent implements OnInit {
  public vendedor: FormGroup;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild("closet") closet: ElementRef;
  constructor(
    private vendedorServ :VendedoresService,
    private alertService: AlertService,
  ) 
  {
   
    this.vendedor = new FormGroup({
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      nombres: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[0-9]+$')]),
    });
   }

  ngOnInit(): void {
    
  }
 
  registrarUsuario( formDirective: FormGroupDirective){   
      this.vendedorServ.addVendedor(this.vendedor.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        formDirective.resetForm();
        this.vendedor.reset();      
        this.closet.nativeElement.click();
        this.emitUpdate.emit(1); 
      },
      error =>{
          this.alertService.danger(error.error.mensaje);  
      }
      );
    
  }
}

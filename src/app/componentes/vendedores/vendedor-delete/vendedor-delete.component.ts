import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { VendedoresService } from '../../../services/vendedores.service';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-vendedor-delete',
  templateUrl: './vendedor-delete.component.html',
  styleUrls: ['./vendedor-delete.component.css']
})
export class VendedorDeleteComponent implements OnInit {
  @Input() data:any[];
  public vendedorE: FormGroup;
  @ViewChild('closet') closemodal;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private vendedorServ :VendedoresService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
  ) {
    this.vendedorE = new FormGroup({
      id: new  FormControl(),
      cedula: new FormControl({value:'', disabled: true}),
      nombres: new FormControl({value:'', disabled: true}),
      apellidos: new FormControl({value:'', disabled: true}),
      telefono: new FormControl({value:'', disabled: true})
    });
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
     this.vendedorE.patchValue({...this.data});
    }
  }

  eliminarVen(){
    this.vendedorServ.eliminarVendedor(this.vendedorE.value).subscribe(
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

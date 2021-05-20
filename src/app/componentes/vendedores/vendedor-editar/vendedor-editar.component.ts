import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { VendedoresService } from 'src/app/services/vendedores.service';

@Component({
  selector: 'app-vendedor-editar',
  templateUrl: './vendedor-editar.component.html',
  styleUrls: ['./vendedor-editar.component.css']
})

export class VendedorEditarComponent implements OnInit {
   
  @Input() data:any[];
  public vendedor: FormGroup;
  @ViewChild('closet') closemodal;
  @Output() emitUpdate: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    private vendedorServ :VendedoresService,
    private spiner :NgxSpinnerService,
    private alertService: AlertService,
  ) {
    this.vendedor = new FormGroup({
      id: new  FormControl(),
      cedula: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
      nombres: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern('^[a-zA-Z ]*$')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[0-9]+$')]),
    });
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {//verificar cambios en la variable que manda el component padre
    let change = changes ['data'] 
    if(!change.firstChange){
     this.vendedor.patchValue({...this.data});
    }
  }
  editarVendedor(){     
    this.vendedorServ.editVendedor(this.vendedor.value).subscribe(
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

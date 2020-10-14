import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { VendedoresService } from '../../../services/vendedores.service';

@Component({
  selector: 'app-vendedor-registrer',
  templateUrl: './vendedor-registrer.component.html',
  styleUrls: ['./vendedor-registrer.component.css']
})
export class VendedorRegistrerComponent implements OnInit {
  public vendedor: FormGroup;
  @ViewChild('closemodal') closemodal;
  constructor(
    private vendedorServ :VendedoresService,
    private spiner :NgxSpinnerService,
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
 
  registrarUsuario(){   
      this.vendedorServ.addVendedor(this.vendedor.value).subscribe(
      response =>{
        this.alertService.success(response.mensaje);
        this.closemodal.nativeElement.click();
        this.vendedor.patchValue({ cedula:"", nombres:"" ,apellidos: "",telefono: ""}); 
      },
      error =>{
          this.alertService.danger(error.error.mensaje);  
      }
      );
    
  }
}

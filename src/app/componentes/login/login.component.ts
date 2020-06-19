import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public datorForm:any;
  
  constructor() {
    this.datorForm ={
     correo:'',
     contrasena:''
    };
   }

  ngOnInit(): void {
  }

  validarInicio(){
    console.log(this.datorForm);
  }

}

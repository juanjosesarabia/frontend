import { Component, OnInit } from '@angular/core';
import { CookieService }  from 'ngx-cookie-service';
import { LoginService } from '../../services/login.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[LoginService]
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  public name :string;

  constructor(
    private cookieService: CookieService,
    private cerrarSe: LoginService,
    private  _router : Router
  ) { }

  ngOnInit(): void {
   this.name= this.cookieService.get('cookie-N');

  }

  cerrarSesion():void{
    this.cerrarSe.cerrarSesion();
    this._router.navigate(['/']);
    
  }

}

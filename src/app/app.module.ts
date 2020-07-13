import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MaterialModule} from './material-module';
import { DataDashboardComponent } from './componentes/data-dashboard/data-dashboard.component';
import { CookieService }  from 'ngx-cookie-service';
import { GuardianGuard } from './guardian/guardian.guard';

import { LoginService } from './services/login.service';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    DashboardComponent,
    ErrorComponent,
    DataDashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [appRoutingProviders, CookieService,GuardianGuard,LoginService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

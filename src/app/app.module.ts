import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

import { LoginService } from './services/login.service';
import { ProductoService } from './services/producto.service';
import { DashboardService } from './services/dashboard.service';
import { VendedoresService } from './services/vendedores.service';
import { IngresoService } from './services/ingreso.service';
import { LogComponent } from './componentes/log/log.component';
import { UsuarioRegisComponent } from './componentes/usuarios/usuario-regis/usuario-regis.component';
import { UsuarioEditComponent } from './componentes/usuarios/usuario-edit/usuario-edit.component';
import { UsuarioSearchComponent } from './componentes/usuarios/usuario-search/usuario-search.component';
import { UsuarioDeleteComponent } from './componentes/usuarios/usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './componentes/usuarios/usuario-list/usuario-list.component';
import { UsuarioPadreComponent } from './componentes/usuarios/usuario-padre/usuario-padre.component';
import { ProductoPadreComponent } from './componentes/productos/producto-padre/producto-padre.component';
import { ProductoRegistrerComponent } from './componentes/productos/producto-registrer/producto-registrer.component';
import { ProductoEditComponent } from './componentes/productos/producto-edit/producto-edit.component';
import { ProductoSearchComponent } from './componentes/productos/producto-search/producto-search.component';
import { ProductoDeleteComponent } from './componentes/productos/producto-delete/producto-delete.component';
import { ProductoListComponent } from './componentes/productos/producto-list/producto-list.component';
import { VendedorPadreComponent } from './componentes/vendedores/vendedor-padre/vendedor-padre.component';
import { VendedorEditComponent } from './componentes/vendedores/vendedor-edit/vendedor-edit.component';
import { VendedorRegistrerComponent } from './componentes/vendedores/vendedor-registrer/vendedor-registrer.component';
import { VendedorSearchComponent } from './componentes/vendedores/vendedor-search/vendedor-search.component';
import { VendedorDeleteComponent } from './componentes/vendedores/vendedor-delete/vendedor-delete.component';
import { VendedorListComponent } from './componentes/vendedores/vendedor-list/vendedor-list.component';
import { IngresoPadreComponent } from './componentes/ingresos/ingreso-padre/ingreso-padre.component';
import { IngresoRegistrerComponent } from './componentes/ingresos/ingreso-registrer/ingreso-registrer.component';
import { IngresoEditComponent } from './componentes/ingresos/ingreso-edit/ingreso-edit.component';
import { IngresoSearchComponent } from './componentes/ingresos/ingreso-search/ingreso-search.component';
import { IngresoDeleteComponent } from './componentes/ingresos/ingreso-delete/ingreso-delete.component';
import { IngresoListComponent } from './componentes/ingresos/ingreso-list/ingreso-list.component';
import { SalidaPadreComponent } from './componentes/salidas/salida-padre/salida-padre.component';
import { SalidaRegistrerVenComponent } from './componentes/salidas/salida-registrer-ven/salida-registrer-ven.component';
import { SalidaRegistrerDesComponent } from './componentes/salidas/salida-registrer-des/salida-registrer-des.component';
import { SalidaEditComponent } from './componentes/salidas/salida-edit/salida-edit.component';
import { SalidaSearchComponent } from './componentes/salidas/salida-search/salida-search.component';
import { SalidaDeleteComponent } from './componentes/salidas/salida-delete/salida-delete.component';
import { SalidaListComponent } from './componentes/salidas/salida-list/salida-list.component';
import { PaginatePipe } from './pipe/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    DashboardComponent,
    ErrorComponent,
    DataDashboardComponent,
    LogComponent,
    UsuarioRegisComponent,
    UsuarioEditComponent,
    UsuarioSearchComponent,
    UsuarioDeleteComponent,
    UsuarioListComponent,
    UsuarioPadreComponent,
    ProductoPadreComponent,
    ProductoRegistrerComponent,
    ProductoEditComponent,
    ProductoSearchComponent,
    ProductoDeleteComponent,
    ProductoListComponent,
    VendedorPadreComponent,
    VendedorEditComponent,
    VendedorRegistrerComponent,
    VendedorSearchComponent,
    VendedorDeleteComponent,
    VendedorListComponent,
    IngresoPadreComponent,
    IngresoRegistrerComponent,
    IngresoEditComponent,
    IngresoSearchComponent,
    IngresoDeleteComponent,
    IngresoListComponent,
    SalidaPadreComponent,
    SalidaRegistrerVenComponent,
    SalidaRegistrerDesComponent,
    SalidaEditComponent,
    SalidaSearchComponent,
    SalidaDeleteComponent,
    SalidaListComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MaterialModule
  ],
  providers: [appRoutingProviders, CookieService,GuardianGuard,LoginService,DashboardService, ProductoService,VendedoresService,IngresoService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//importar modulos 
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//importar compoentes a los cuales quiero hacer  una pagina exclusiva
import { LoginComponent } from './componentes/login/login.component';
import  { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DataDashboardComponent} from './componentes/data-dashboard/data-dashboard.component';
import { LogComponent } from './componentes/log/log.component';
//Importar el guardian de rutas
 import { GuardianGuard } from "./guardian/guardian.guard";
import { UsuarioRegisComponent } from './componentes/usuarios/usuario-regis/usuario-regis.component';
import { UsuarioPadreComponent } from './componentes/usuarios/usuario-padre/usuario-padre.component';
import { UsuarioDeleteComponent } from './componentes/usuarios/usuario-delete/usuario-delete.component';
import { UsuarioEditComponent } from './componentes/usuarios/usuario-edit/usuario-edit.component';
import { UsuarioSearchComponent } from './componentes/usuarios/usuario-search/usuario-search.component';
import { UsuarioListComponent } from './componentes/usuarios/usuario-list/usuario-list.component';
import { ProductoPadreComponent } from './componentes/productos/producto-padre/producto-padre.component';
import { ProductoSearchComponent } from './componentes/productos/producto-search/producto-search.component';
import { ProductoRegistrerComponent } from './componentes/productos/producto-registrer/producto-registrer.component';
import { ProductoEditComponent } from './componentes/productos/producto-edit/producto-edit.component';
import { ProductoDeleteComponent } from './componentes/productos/producto-delete/producto-delete.component';
import { ProductoListComponent } from './componentes/productos/producto-list/producto-list.component';
import { VendedorPadreComponent } from './componentes/vendedores/vendedor-padre/vendedor-padre.component';
import { VendedorRegistrerComponent } from './componentes/vendedores/vendedor-registrer/vendedor-registrer.component';
import { VendedorEditComponent } from './componentes/vendedores/vendedor-edit/vendedor-edit.component';
import { VendedorSearchComponent } from './componentes/vendedores/vendedor-search/vendedor-search.component';
import { VendedorDeleteComponent } from './componentes/vendedores/vendedor-delete/vendedor-delete.component';
import { VendedorListComponent } from './componentes/vendedores/vendedor-list/vendedor-list.component';
import { IngresoPadreComponent } from './componentes/ingresos/ingreso-padre/ingreso-padre.component';
import { IngresoRegistrerComponent } from './componentes/ingresos/ingreso-registrer/ingreso-registrer.component';
import { IngresoEditComponent } from './componentes/ingresos/ingreso-edit/ingreso-edit.component';
import { IngresoSearchComponent } from './componentes/ingresos/ingreso-search/ingreso-search.component';
import { IngresoListComponent } from './componentes/ingresos/ingreso-list/ingreso-list.component';
import { IngresoDeleteComponent } from './componentes/ingresos/ingreso-delete/ingreso-delete.component';
import { SalidaPadreComponent } from './componentes/salidas/salida-padre/salida-padre.component';
import { SalidaRegistrerVenComponent } from './componentes/salidas/salida-registrer-ven/salida-registrer-ven.component';
import { SalidaRegistrerDesComponent } from './componentes/salidas/salida-registrer-des/salida-registrer-des.component';
import { SalidaSearchComponent } from './componentes/salidas/salida-search/salida-search.component';
import { SalidaDeleteComponent } from './componentes/salidas/salida-delete/salida-delete.component';
import { SalidaListComponent } from './componentes/salidas/salida-list/salida-list.component';


//Array de rutas
const appRoutes: Routes =[
	{path:'',component: LoginComponent},
	{path:'crear-usuario',component: RegistrarUsuarioComponent},
	{path:'app',component: DashboardComponent,canActivate:[GuardianGuard],
       children:[ 
		   {path:'dashboard',component:DataDashboardComponent,canActivate:[GuardianGuard]},
		   {path:'usuario',component:UsuarioPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:UsuarioRegisComponent,canActivate:[GuardianGuard]},
				 {path:'edit-usuario',component:UsuarioEditComponent,canActivate:[GuardianGuard]},
				 {path:'search-usuario',component:UsuarioSearchComponent,canActivate:[GuardianGuard]},
				 {path:'delete-usuario',component:UsuarioDeleteComponent,canActivate:[GuardianGuard]},
				 {path:'list-usuarios',component:UsuarioListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
			{path:'producto',component:ProductoPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:ProductoRegistrerComponent,canActivate:[GuardianGuard]},
				 {path:'edit-producto',component:ProductoEditComponent,canActivate:[GuardianGuard]},
				 {path:'search-producto',component:ProductoSearchComponent,canActivate:[GuardianGuard]},
				 {path:'delete-producto',component:ProductoDeleteComponent,canActivate:[GuardianGuard]},
				 {path:'list-producto',component:ProductoListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
			{path:'vendedor',component:VendedorPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:VendedorRegistrerComponent,canActivate:[GuardianGuard]},
				 {path:'edit-vendedor',component:VendedorEditComponent,canActivate:[GuardianGuard]},
				 {path:'search-vendedor',component:VendedorSearchComponent,canActivate:[GuardianGuard]},
				 {path:'delete-vendedor',component:VendedorDeleteComponent,canActivate:[GuardianGuard]},
				 {path:'list-vendedor',component:VendedorListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
			{path:'ingreso',component:IngresoPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:IngresoRegistrerComponent,canActivate:[GuardianGuard]},
				 {path:'edit-ingreso',component:IngresoEditComponent,canActivate:[GuardianGuard]},
				 {path:'search-ingreso',component:IngresoSearchComponent,canActivate:[GuardianGuard]},
				 {path:'delete-ingreso',component:IngresoDeleteComponent,canActivate:[GuardianGuard]},
				 {path:'list-ingreso',component:IngresoListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
			{path:'salida',component:SalidaPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:SalidaRegistrerVenComponent,canActivate:[GuardianGuard]},
				 {path:'registrer-salida-destruccion',component:SalidaRegistrerDesComponent,canActivate:[GuardianGuard]},
				 {path:'search-salida',component:SalidaSearchComponent,canActivate:[GuardianGuard]},
				 {path:'delete-salida',component:SalidaDeleteComponent,canActivate:[GuardianGuard]},
				 {path:'list-salida',component:SalidaListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
		   {path:'log',component:LogComponent,canActivate:[GuardianGuard]}
		],


    },    
	{path:'**',component:ErrorComponent}
	
	

];

//exportar modulo rutas
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
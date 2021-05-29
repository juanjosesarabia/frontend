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
import { UsuarioPadreComponent } from './componentes/usuarios/usuario-padre/usuario-padre.component';
import { UsuarioEditComponent } from './componentes/usuarios/usuario-edit/usuario-edit.component';
import { UsuarioSearchComponent } from './componentes/usuarios/usuario-search/usuario-search.component';
import { ProductoPadreComponent } from './componentes/productos/producto-padre/producto-padre.component';
import { ProductoListComponent } from './componentes/productos/producto-list/producto-list.component';
import { VendedorPadreComponent } from './componentes/vendedores/vendedor-padre/vendedor-padre.component';
import { VendedorEditComponent } from './componentes/vendedores/vendedor-edit/vendedor-edit.component';
import { VendedorListComponent } from './componentes/vendedores/vendedor-list/vendedor-list.component';
import { IngresoPadreComponent } from './componentes/ingresos/ingreso-padre/ingreso-padre.component';
import { IngresoSearchComponent } from './componentes/ingresos/ingreso-search/ingreso-search.component';
import { IngresoListComponent } from './componentes/ingresos/ingreso-list/ingreso-list.component';
import { IngresoDeleteComponent } from './componentes/ingresos/ingreso-delete/ingreso-delete.component';
import { SalidaPadreComponent } from './componentes/salidas/salida-padre/salida-padre.component';
import { SalidaRegistrerVenComponent } from './componentes/salidas/salida-registrer-ven/salida-registrer-ven.component';
import { SalidaRegistrerDesComponent } from './componentes/salidas/salida-registrer-des/salida-registrer-des.component';
import { SalidaSearchComponent } from './componentes/salidas/salida-search/salida-search.component';
import { SalidaDeleteComponent } from './componentes/salidas/salida-delete/salida-delete.component';
import { SalidaListComponent } from './componentes/salidas/salida-list/salida-list.component';
import { ListToProductDeleteComponent } from './componentes/productos/list-to-product-delete/list-to-product-delete.component';


//Array de rutas
const appRoutes: Routes =[
	{path:'',component: LoginComponent},
	{path:'crear-usuario',component: RegistrarUsuarioComponent},
	{path:'app',component: DashboardComponent,canActivate:[GuardianGuard],
       children:[ 
		   {path:'dashboard',component:DataDashboardComponent,canActivate:[GuardianGuard]},
		   {path:'usuario',component:UsuarioPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:UsuarioEditComponent,canActivate:[GuardianGuard]},
				 {path:'usuarios-delete',component:UsuarioSearchComponent,canActivate:[GuardianGuard]}			
			 ],
			},
			{path:'producto',component:ProductoPadreComponent,canActivate:[GuardianGuard],
		     children:[
				{path:'',component:ProductoListComponent,canActivate:[GuardianGuard]},
				 {path:'list-delete-producto',component:ListToProductDeleteComponent,canActivate:[GuardianGuard]},
				
				 				
			 ],
			},
			{path:'vendedor',component:VendedorPadreComponent,canActivate:[GuardianGuard],
		     children:[				
				 {path:'',component:VendedorEditComponent,canActivate:[GuardianGuard]},
				 {path:'vendedor-delete',component:VendedorListComponent,canActivate:[GuardianGuard]},				
			 ],
			},
			{path:'ingreso',component:IngresoPadreComponent,canActivate:[GuardianGuard],
		     children:[
				 {path:'',component:IngresoSearchComponent,canActivate:[GuardianGuard]},
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
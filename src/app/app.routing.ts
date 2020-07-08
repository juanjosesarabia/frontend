//importar modulos 
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//importar compoentes a los cuales quiero hacer  una pagina exclusiva
import { LoginComponent } from './componentes/login/login.component';
import  { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DataDashboardComponent} from './componentes/data-dashboard/data-dashboard.component';
//Array de rutas

const appRoutes: Routes =[
	{path:'',component: LoginComponent},
	{path:'app/dashboard',component: DashboardComponent},
	{path:'crear-usuario',component: RegistrarUsuarioComponent},
	{path:'**',component:ErrorComponent}
	
	

];

//exportar modulo rutas
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
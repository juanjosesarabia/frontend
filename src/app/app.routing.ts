//importar modulos 
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//importar compoentes a los cuales quiero hacer  una pagina exclusiva
import { LoginComponent } from './componentes/login/login.component';
import  { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';


//Array de rutas

const appRoutes: Routes =[
	{path:'',component: LoginComponent},
	{path:'crearUsuario',component: RegistrarUsuarioComponent}	
	
	

];

//exportar modulo rutas
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
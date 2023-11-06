import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{
path: 'inicio',
loadChildren: () => import('./pages/inicio/inicio.module').then(m =>
m.InicioPageModule)
},
{
path: '',
redirectTo: 'inicio',
pathMatch: 'full'
},
  {
    path: 'tadeo',
    loadChildren: () => import('./pages/tadeo/tadeo.module').then( m => m.TadeoPageModule)
  },
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules
})
],
exports: [RouterModule]
})
export class AppRoutingModule { }

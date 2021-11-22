import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaModule)
  },
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

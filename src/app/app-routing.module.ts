import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule)
  },
  {
    path: 'editar-produto/:cod',
    loadChildren: () => import('./pages/editar-produto/editar-produto.module').then(m => m.EditarProdutoModule)
  },
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

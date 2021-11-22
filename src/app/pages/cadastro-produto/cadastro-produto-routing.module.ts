
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto.component';


const routes: Routes = [
  {
    path: '',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProdutoRoutingModule { }

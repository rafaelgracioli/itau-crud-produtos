import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { LoginRoutingModule } from './lista-routing.module';



@NgModule({
  declarations: [
    ListaComponent,
    ProductReadComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class ListaModule { }

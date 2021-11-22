import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { LoginRoutingModule } from './lista-routing.module';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class ListaModule { }

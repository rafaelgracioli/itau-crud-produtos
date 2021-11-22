import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaModule } from './pages/lista/lista.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroProdutoModule } from './pages/cadastro-produto/cadastro-produto.module';
import { EditarProdutoModule } from './pages/editar-produto/editar-produto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListaModule,
    CadastroProdutoModule,
    EditarProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

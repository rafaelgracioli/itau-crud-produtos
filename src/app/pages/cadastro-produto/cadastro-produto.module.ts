import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { ProductCreateComponent } from 'src/app/components/product/product-create/product-create.component';
import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CadastroProdutoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class CadastroProdutoModule { }

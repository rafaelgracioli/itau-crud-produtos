import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarProdutoComponent } from './editar-produto.component';
import { EditarProdutoRoutingModule } from './editar-produto-routing.module';
import { ProductUpdateComponent } from 'src/app/components/product/product-update/product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EditarProdutoComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    EditarProdutoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class EditarProdutoModule { }

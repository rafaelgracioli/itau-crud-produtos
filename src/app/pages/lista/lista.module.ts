import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { LoginRoutingModule } from './lista-routing.module';

import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogComponent } from 'src/app/components/product/product-read/dialog/dialog.component';



@NgModule({
  declarations: [
    ListaComponent,
    ProductReadComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    LoginRoutingModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
})
export class ListaModule { }

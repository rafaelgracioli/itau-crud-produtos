import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['cod', 'name', 'category', 'edit', 'delete'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    public productServer: ProductService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.loadProduct();
  }

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadProduct() {
    this.productServer.read().subscribe(payments => {
      this.products = payments;

      this.dataSource = new MatTableDataSource(payments);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editProduct(cod: number): void {
    this.router.navigate([`editar-produto/${cod}`]);
  }

  deleteProduct(id: number): void {
    this.productServer.delete(id).subscribe(() => {
      this.loadProduct();
    });
  }

  openDialog(id: number, productName: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {name: productName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(id);
      }
    });
  }

}

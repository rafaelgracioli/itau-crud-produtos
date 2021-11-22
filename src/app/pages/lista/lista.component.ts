import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  createProduct(): void {
    this.router.navigate(['cadastro-produto']);
  }

}

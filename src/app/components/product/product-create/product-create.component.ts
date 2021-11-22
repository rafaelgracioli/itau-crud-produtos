import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product;

  formCreateProduct = this.fb.group({
    cod: this.fb.control('', [Validators.required]),
    name: this.fb.control('', [Validators.required]),
    category: this.fb.control('', [Validators.required]),
  });

  get cod() { return this.formCreateProduct.get('cod'); }
  get name() { return this.formCreateProduct.get('name'); }
  get category() { return this.formCreateProduct.get('category'); }

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.formCreateProduct.status === 'VALID') {
      this.product = {
        cod: this.cod.value,
        name: this.name.value,
        category: this.category.value
      };

      this.productService.findCod(this.cod.value).subscribe(res => {
        if (res.length === 0) {
          this.productService.create(this.product).subscribe(() => {
              this.backToList();
            });
        } else {
          alert(`O código ${this.cod.value} já foi cadastrado`);
        }
      });
    }
  }

  backToList(): void {
    this.router.navigate(['lista']);
  }

}

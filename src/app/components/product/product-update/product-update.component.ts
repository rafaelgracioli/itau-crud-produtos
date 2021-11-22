import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  formUpdateProduct = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    category: this.fb.control('', [Validators.required]),
  });

  get name() { return this.formUpdateProduct.get('name'); }
  get category() { return this.formUpdateProduct.get('category'); }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    const cod = Number(this.route.snapshot.paramMap.get('cod'));
    this.productService.findCod(cod).subscribe(res => {
      this.product = res[0];
      if (this.product) {
        this.formUpdateProduct.patchValue({
          name: this.product.name,
          category: this.product.category
        });
      } else {
        this.backToList();
      }
    });
  }

  onSubmit(): void {
    if (this.formUpdateProduct.status === 'VALID') {
      this.product = {
        id: this.product.id,
        cod: this.product.cod,
        name: this.name.value,
        category: this.category.value
      };
      this.productService.update(this.product).subscribe(res => {
        this.backToList();
      });
    }
  }

  backToList(): void {
    this.router.navigate(['lista']);
  }

}

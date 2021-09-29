import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> = this._productService.product$;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts();
  }

  onAddProduct(id: any) {
    this._cartService.addItemToCart(id);
  }
}

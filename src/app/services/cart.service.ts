import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cartItemListSubject: Observable<[Product]> = new BehaviorSubject([]);
  cartItemListSubject = new Subject<Product[]>();

  cartList$: Observable<Product[]> = this.cartItemListSubject.asObservable();
  productList!: Product[];
  constructor(private _productService: ProductService) {
    this._productService.product$.subscribe((products) => {
      this.productList = products;
      console.log('cart service constructor', products);
    });
  }

  addItemToCart(id: number): void {
    this.cartItemListSubject.next([this.filterProduct(id)]);
  }

  filterProduct(id: number): Product {
    return this.productList.find((p) => p.id === id) as Product;
  }
}

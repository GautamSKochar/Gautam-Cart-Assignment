import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { products } from '../../assets/mock/product';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {}
  productsSubject$ = new BehaviorSubject<Product[]>([]);

  public product$: Observable<Product[]> = this.productsSubject$.asObservable();

  getProducts(): void {
    this.productsSubject$.next(products);
  }
}

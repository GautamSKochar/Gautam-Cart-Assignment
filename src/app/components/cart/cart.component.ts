import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartCount: number = 0;

  cartList$: Observable<Product[]> = this._cartService.cartList$;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    // this.getCartList();
  }

  // getCartList(): void {
  //   this.cartList = this._cartService.cartList;
  // }
}

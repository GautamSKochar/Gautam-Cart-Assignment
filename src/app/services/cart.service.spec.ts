import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  const item = {
    id: 1,
    title: 'Dove Soap',
    price: 39.99,
    image: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have empty cartItem', () => {
    expect(service.cartItemList.length).toBe(0);
  });

  it('should add item to cart when addItem method is called', () => {
    service.cartItemList = [];
    service.addItemToCart(item);
    expect(service.cartItemList.length).not.toBe(0);
  });
});

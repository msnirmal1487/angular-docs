import { Injectable, inject } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  http = inject(HttpClient)
  items: Product[] = [];

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(): Product[]{
    return this.items;
  }

  clearCart(): Product[]{
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}

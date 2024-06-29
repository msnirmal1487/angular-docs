import { Component, Inject, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService= inject(CartService)

  
  items = this.cartService.getItems();
}

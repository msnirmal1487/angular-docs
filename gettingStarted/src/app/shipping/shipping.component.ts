import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<{type: string, price: number}[]>
  cartService = inject(CartService)

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices(); 
  }

}

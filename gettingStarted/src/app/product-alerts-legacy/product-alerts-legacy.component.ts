import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts-legacy',
  templateUrl: './product-alerts-legacy.component.html',
  styleUrl: './product-alerts-legacy.component.css'
})
export class ProductAlertsLegacyComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}

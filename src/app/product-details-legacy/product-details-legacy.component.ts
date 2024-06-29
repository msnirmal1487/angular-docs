import { Component, OnInit, inject } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-legacy',
  templateUrl: './product-details-legacy.component.html',
  styleUrl: './product-details-legacy.component.css'
})
export class ProductDetailsLegacyComponent implements OnInit{

  route = inject(ActivatedRoute)
  product: Product | undefined;

  ngOnInit(): void {
   const routeParams = this.route.snapshot.paramMap ; 
   const productIdFromRoute = Number(routeParams.get('productId'));

   this.product = products.find(p => p.id === productIdFromRoute) ;
   
  }

}

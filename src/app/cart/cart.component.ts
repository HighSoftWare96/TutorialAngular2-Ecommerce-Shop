import { Component } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
    selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  intoCart: boolean = false;

  constructor( private service : ProductService ) { 
  }
  
}

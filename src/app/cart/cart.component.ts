import { Component } from '@angular/core';

@Component({
    selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  nItems: number;
  // manca un array dove inserire gli elementi del carrello


  constructor() { 
    this.nItems = 0;
    console.log("Inizialized!");
  }
}

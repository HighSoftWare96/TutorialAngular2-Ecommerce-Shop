import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service'

@Component({
  selector: 'app-cart-ui',
  templateUrl: './cart-ui.component.html',
  styleUrls: ['./cart-ui.component.css']
})

export class CartUIComponent implements OnInit {

  constructor(private service: ProductService) {}

  ngOnInit() {}


}

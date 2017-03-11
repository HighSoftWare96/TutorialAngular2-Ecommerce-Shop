import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service'


@Component({
  selector: 'app-cart-ui',
  templateUrl: './cart-ui.component.html',
  styleUrls: ['./cart-ui.component.css']
})

export class CartUIComponent implements OnInit {

  constructor(private itemStored: ProductService) {
  }


  ngOnInit() {}

  removeAll(){
    this.itemStored.removeAll();
  }

  removeOne(id: number){
    this.itemStored.removeOne(id);
  }
}

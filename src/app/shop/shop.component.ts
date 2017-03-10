import { Component } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})


export class ShopComponent {

    

    constructor(private itemStored: ProductService) {

    }

    changeCurrency(id2: number) {
        this.itemStored.items.forEach(element => {
            // se trovo l'elemento con quell'id cambio il suo prezzo
            if (element.id == id2) {
                if (element.otherCurrency == "Euro") {
                    element.originalPrice = element.originalPrice * 0.94;
                    element.currency = "€";
                    element.otherCurrency = "Dollar";
                }
                else {
                    element.originalPrice = element.originalPrice / 0.94;
                    element.currency = "$";
                    element.otherCurrency = "Euro";
                }
            }
        });
    }

    amountChanged(value: number, id2: number) {

        // se trovo l'elemento con quell'id cambio il suo prezzo
        this.itemStored.items.forEach(element => {
            if (element.id == id2) {
                if(element.onCart) // aggiungo a quelli che ci sono gia
                    element.amount += value;
                else
                    element.amount = value;
            }
        });
    } 

    addToCart(id: number){
        this.itemStored.addToCart(id);
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})


export class ShopComponent {

    itemStored: item[] = [
        { id: 1, name: 'MP3 Player', description: 'A fantastic MP3 Player you can use whenever you want!', price: 7000, currency: '$', otherCurrency: 'Euro' },
        { id: 2, name: '4K TV', description: 'A fantastic 4K television for seeing at best!', price: 19000, currency: '$', otherCurrency: 'Euro' },
        { id: 3, name: 'Huawai P9 Lite', description: 'A wonderful smartphone for who hasn\'t bought it yet!', price: 15000, currency: '$', otherCurrency: 'Euro' },
        { id: 4, name: 'HiFi Stereo system', description: 'A fantastic HIFI System for listening at best your movies!', price: 12000, currency: '$', otherCurrency: 'Euro' },
        { id: 5, name: 'Kit of adapters for Upple MecBook', description: 'Haven\'t you enough interfaces on your new MacBook? Don\'t worry!', price: 16500, currency: '$', otherCurrency: 'Euro' },
        { id: 6, name: 'Upple IPadd', description: 'A fantastic Tablet you can use for drawing with your Upple Pen!', price: 17000, currency: '$', otherCurrency: 'Euro' },
        { id: 7, name: 'Mycrosoft Office 635', description: 'A suite of wonderful utilities you can use 635 days per year!', price: 1000, currency: '$', otherCurrency: 'Euro' },
        { id: 8, name: 'MP3 Player', description: 'An other fantastic MP3 Player you can use whenever you want!', price: 18000, currency: '$', otherCurrency: 'Euro' },
    ];
    constructor() {
        console.log("EHI!");
    }

    changeCurrency(id2: number) {
        this.itemStored.forEach(element => {
            // se trovo l'elemento con quell'id cambio il suo prezzo
            if (element.id == id2) {
                if (element.otherCurrency == "Euro") {
                    element.price = element.price * 0.94;
                    element.currency = "€";
                    element.otherCurrency = "Dollar";
                }
                else{      
                    element.price = element.price / 0.94;
                    element.currency = "$";
                    element.otherCurrency = "Euro";
                }
            }
        });


    }
}

// classe che descrive il prodotto (visibile a tutti?)
export class item {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    otherCurrency: string;
}

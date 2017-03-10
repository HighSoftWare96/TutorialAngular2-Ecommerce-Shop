import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {
    nItems: number = 0;
    subTotal: number = 0;

    constructor() {
        this.nItems = 0;
        this.subTotal = 0;
    }

    public items: item[] = [
        { id: 1, name: 'MP3 Player', description: 'A fantastic MP3 Player you can use whenever you want!', originalPrice: 7000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 2, name: '4K TV', description: 'A fantastic 4K television for seeing at best!', originalPrice: 19000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 3, name: 'Huawai P9 Lite', description: 'A wonderful smartphone for who hasn\'t bought it yet!', originalPrice: 15000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 4, name: 'HiFi Stereo system', description: 'A fantastic HIFI System for listening at best your movies!', originalPrice: 12000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 5, name: 'Kit of adapters for Upple MecBook', description: 'Haven\'t you enough interfaces on your new MacBook? Don\'t worry!', originalPrice: 165000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 6, name: 'Upple IPadd', description: 'A fantastic Tablet you can use for drawing with your Upple Pen!', originalPrice: 17000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 7, name: 'Mycrosoft Office 635', description: 'A suite of wonderful utilities you can use 635 days per year!', originalPrice: 1000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
        { id: 8, name: 'MP3 Player', description: 'An other fantastic MP3 Player you can use whenever you want!', originalPrice: 18000, currency: '$', otherCurrency: 'Euro', onCart: false, amount: 1 },
    ];

    addToCart(id2: number) {
        this.items.forEach(element => {
            if (element.id == id2) {
                var amountTemp: number = 0;
                var totTemp: number = 0;
                element.onCart = true;

                // calcolo il totale degli oggetti
                for (let item of this.items) {
                    if (item.onCart){
                        amountTemp += item.amount;
                        totTemp += (item.originalPrice * item.amount)
                    }
                }

                this.nItems = amountTemp;
                this.subTotal = totTemp;
            }
        });
    }
}

// classe che descrive il prodotto (visibile a tutti?)
export interface item {
    id: number;
    name: string;
    description: string;
    originalPrice: number;
    currency: string;
    otherCurrency: string;
    onCart: boolean;
    amount: number;
}

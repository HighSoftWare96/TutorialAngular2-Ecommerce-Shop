import { Component } from '@angular/core';

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})

export class ShopComponent {
    itemStored: item[];

    constructor() {
        console.log("EHI!");
    }
}

interface item{
    name: string;
    description: string;
    price: string;
}

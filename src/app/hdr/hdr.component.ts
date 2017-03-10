import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 

@Component({
  selector: 'hdr',
  templateUrl: './hdr.component.html',
  styleUrls: ['./hdr.component.css']
})
export class HdrComponent implements OnInit {
  
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Ecommerce Shop";
}

}

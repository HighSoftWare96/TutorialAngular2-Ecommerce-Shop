import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShopComponent } from './shop/shop.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }

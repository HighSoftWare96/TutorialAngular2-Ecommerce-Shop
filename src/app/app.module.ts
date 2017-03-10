import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShopComponent } from './shop/shop.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/products.service';
import { RouterModule, Routes } from '@angular/router';
import { CartUIComponent } from './cart-ui/cart-ui.component';
import { HdrComponent } from './hdr/hdr.component';

const appRoutes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'cart', component: CartUIComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    CartUIComponent,
    HdrComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }

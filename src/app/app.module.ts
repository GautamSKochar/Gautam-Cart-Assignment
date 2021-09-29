import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [AppComponent, CartComponent, HeaderComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

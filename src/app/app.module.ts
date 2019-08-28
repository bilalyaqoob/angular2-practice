import { HTTP_PROVIDERS } from '@angular/http';
import { ProductService } from './products/products.services';
import { ProductFilterPipe } from './products/product-list.pipes';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './products/productslist.component';
import { StarComponent } from './stars/star.component';

@NgModule({
  declarations: [
    AppComponent, StarComponent , ProductslistComponent, ProductFilterPipe
    ],   
  imports: [BrowserModule,FormsModule],
  providers: [ProductService,HTTP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}

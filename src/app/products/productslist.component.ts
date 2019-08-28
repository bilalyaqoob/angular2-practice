import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.services';

@Component({
    selector: 'products-list',
    templateUrl: './productslist.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductslistComponent implements OnInit {
    pageTitle: string = "Product List";
    showImage: boolean = false;
    listFilter: string ;
    imgWidth: number = 40;
    imgMargin: number = 2;
    products: IProduct[] ;
    
    constructor(private _productService : ProductService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
     this.products = this._productService.getProducts();
    }

    onRatingClicked (message:string):void{
        this.pageTitle = 'Product List' + message;
    }
}
import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({providedIn: 'root'})

export class ProductService {
    products = [
        {name: 'Table', cost: 2327, color: 'brown'},
        {name: 'Chair', cost: 2327, color: 'white'},
        {name: 'Television', cost: 2327, color: 'black'},
        {name: 'Couch', cost: 2327, color: 'blue'}
    ]
    getProducts() {
        return of(this.products)
    }

    addProduct(product) {
        this.products = [product, ...this.products]
    }
}
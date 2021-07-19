import { Component } from "@angular/core";
import { SecurityService } from "../service/security.service";
import { ProductService } from "./products.service";


@Component({
    selector: 'products',
    template: `<div>
        <h1>Products</h1>
        <ul>
            <li *ngFor="let p of products">
                {{ p.name }} {{p.color}} {{p.cost}}
            </li>
        </ul>
        <button class="btn btn-secondary" *ngIf="accessControl.canAddProduct" (click)="addProduct()">Add Product</button>
    </div>`
})

export class ProductsComponent {
    accessControl;
    constructor(private _ProductService: ProductService, private _securityService: SecurityService){
        this.accessControl = this._securityService.securityObject
    }

    products
    ngOnInit() {
        this._ProductService.getProducts().subscribe(resp => {
            console.log(resp)
            this.products = resp
        })
    }

    addProduct(){
        alert("user has access to add products")
    }
}
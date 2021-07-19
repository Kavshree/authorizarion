import { Component } from "@angular/core";
import { SecurityService } from "../service/security.service";
import { CategoryService } from "./categories.service";


@Component({
    selector: 'categories',
    template: `<div>
        <h1>Categories</h1>
        <ul>
            <li *ngFor="let c of categories"> {{c.name}}
        </ul>
        <button (click)="addCategory()" *ngIf="accessControl.securityObject.canAddCategory">Add Category</button>
    </div>`
})

export class CategoriesComponent {
    constructor(private _CategoryService: CategoryService, private _SecurityService: SecurityService) {}

    categories;
    accessControl = this._SecurityService

    ngOnInit() {
         this._CategoryService.getCategories().subscribe(resp => {
            this.categories = resp
        })
    }

    addCategory() {
        alert("has access to add category")
    }
}
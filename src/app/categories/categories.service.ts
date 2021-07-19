
import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({providedIn: 'root'})

export class CategoryService {
    categories = [
        {name: 'Electronics'},
        {name: 'Furniture'},
        {name: 'Clothing'},
    ]
    getCategories() {
        return of(this.categories)
    }

    addCategory(category) {
        this.categories = [category, ...this.categories]
    }
}
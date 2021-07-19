import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './Login/login.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard], data: {claimName: 'canAccessProducts'} },
  {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard], data: {claimName: 'canAccessCategories'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent }
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }

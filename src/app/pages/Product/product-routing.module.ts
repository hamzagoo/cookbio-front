import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ResolveProductService } from './product-resolve';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [{
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'add',
  component: ProductAddComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
  {
    path: 'update/:id',
    component: ProductUpdateComponent,
    resolve : {
      maDonnee: ResolveProductService
    }
  }
]
}]
     
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

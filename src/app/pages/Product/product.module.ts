import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { NbThemeModule } from '@nebular/theme';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product-service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ],
  imports: [
    CommonModule,
    NbThemeModule,
    ProductRoutingModule,
  ],
  providers: [
    ProductService,
  ],
})
export class ProductModule { }


import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { NbThemeModule } from '@nebular/theme';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product-service';
import { SharedModule } from 'app/shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductDetailComponent,
    ],
  imports: [
    CommonModule,
    NbThemeModule,
    ProductRoutingModule,
    SharedModule,
    MatIconModule
  ],
  providers: [
    ProductService,
  ],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class ProductModule { }


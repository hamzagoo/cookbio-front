import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product-service';

@Injectable({
  providedIn: 'root'
})
export class ResolveProductService implements Resolve<Product> {

    constructor(
            private route: ActivatedRoute,
            private router: Router,
            private productService: ProductService,
            ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.getProductById(this.route.paramMap['id']);
    }

}
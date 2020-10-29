import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id$: Observable<string>;
  id: number;
  product : Product;

  constructor(private route: ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.id$ =  this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));

    this.id = +this.route.snapshot.paramMap.get('id') ;
   this.productService.getbyId(this.id).subscribe(
     res => {
       this.product = res;
     },
     err => {
       console.log('error');
     }
   )
  }

}

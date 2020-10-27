import { Component, OnInit} from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {description: "product 1", price: 29, title: "product 1"},
    {description: "product 2", price: 29, title: "product 2"},
    {description: "product 9", price: 29, title: "product 9"}
  ]
   constructor() {}

   ngOnInit() {}

   addToPanier(){

   }
}

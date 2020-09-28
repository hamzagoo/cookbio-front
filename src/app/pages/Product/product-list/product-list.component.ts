import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      title : 'produit 1',
      description: 'Produit 1',
      price: 21
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 22
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 23
    },
    {
      title : 'produit 1',
      description: 'Produit 1',
      price: 21
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 22
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 23
    },
    {
      title : 'produit 1',
      description: 'Produit 1',
      price: 21
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 22
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 23
    },
  ]
  cartButton = {
    buttonLabel : "Add to cart",
    buttonAction : "addToCart",
  }
   constructor(private router: Router) {}

   ngOnInit() {
   }

   addToCart(event){
    console.log(event)
   }

   redirectToAddProduct(){
      this.router.navigate(['./pages/parametre-generaux/product/add'])
   }
   redirectToDetailProduct(event){
      this.router.navigate(['./pages/parametre-generaux/product/' + event?.id])
   }
}

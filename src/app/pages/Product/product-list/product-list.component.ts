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
      price: 21,
      image: "../../../assets/images/p1.jpg"
    },{
      title : 'produit 2',
      description: 'Produit 2',
      price: 22,
      image: "../../../assets/images/p2.jpg"
    },{
      title : 'produit 3',
      description: 'Produit 3',
      price: 23,
      image: "../../../assets/images/p3.jpg"
    },
    {
      title : 'produit 4',
      description: 'Produit 4',
      price: 21,
      image: "../../../assets/images/p4.jpg"
    },{
      title : 'produit 5',
      description: 'Produit 5',
      price: 22,
      image: "../../../assets/images/p5.jpg"
    },{
      title : 'produit 6',
      description: 'Produit 6',
      price: 23,
      image: "../../../assets/images/p6.jpg"
    },
    {
      title : 'produit 7',
      description: 'Produit 7',
      price: 21,
      image: "../../../assets/images/p7.jpg"
    },{
      title : 'produit 8',
      description: 'Produit 8',
      price: 22,
      image: "../../../assets/images/p8.jpg"
    }
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
      this.router.navigate(['./pages/home/parametre-generaux/product/add'])
   }
   redirectToDetailProduct(event){
      this.router.navigate(['./pages/parametre-generaux/product/' + event?.id])
   }

   redirectToHome(){
    this.router.navigate(['./pages/home'])
 }
}

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
      id:1,
      title : 'produit 1',
      description: 'produit 1',
      price: 21,
      image: "../../../assets/images/p1.jpg",
      time:30
    },{
      id:2,
      title : 'produit 2',
      description: 'Produit 2',
      price: 22,
      image: "../../../assets/images/p2.jpg",
      time: 10
    },{
      id:3,
      title : 'produit 3',
      description: 'Produit 3',
      price: 23,
      image: "../../../assets/images/p3.jpg",
      time: 5
    },
    {
      id:4,
      title : 'produit 4',
      description: 'Produit 4',
      price: 21,
      image: "../../../assets/images/p4.jpg",
      time: 14
    },{
      id:5,
      title : 'produit 5',
      description: 'Produit 5',
      price: 22,
      image: "../../../assets/images/p5.jpg",
      time: 12
    },{
      id:6,
      title : 'produit 6',
      description: 'Produit 6',
      price: 23,
      image: "../../../assets/images/p6.jpg",
      time: 10
    },
    {
      id:7,
      title : 'produit 7',
      description: 'Produit 7',
      price: 21,
      image: "../../../assets/images/p7.jpg",
      time: 17
    },{
      id:8,
      title : 'produit 8',
      description: 'Produit 8',
      price: 22,
      image: "../../../assets/images/p8.jpg",
      time: 20
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

    var productsOfCart =  JSON.parse(localStorage.getItem("productsOfCart"));
    productsOfCart.push(event);
    localStorage.setItem("productsOfCart", JSON.stringify(productsOfCart));
   }

   redirectToAddProduct(){
      this.router.navigate(['./pages/home/parametre-generaux/product/add'])
   }
   redirectToDetailProduct(event){
     console.log(event)
      this.router.navigate(['./pages/parametre-generaux/product/' + event?.id])
   }

   redirectToHome(){
    this.router.navigate(['./pages/home'])
 }
}

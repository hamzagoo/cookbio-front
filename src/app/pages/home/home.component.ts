import { Component, OnInit } from '@angular/core';
import { Product } from '../Product/product';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideImages = [
    "../../../../assets/images/slides/slide.jpeg",
    "../../../../assets/images/slides/slide2.jpg"
  ]

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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  } 
}

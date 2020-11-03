import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product-service';


@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  cartButton = {
    buttonLabel : "Add to cart",
    buttonAction : "addToCart",
  }
   constructor(private router: Router, private productService: ProductService) {}

   ngOnInit() {

      this.productService.getAllProducts().subscribe(res => {
        this.products = res;
        console.log(res)
      })
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
      this.router.navigate(['./pages/home/parametre-generaux/product/' + event?.id])
   }

   redirectToHome(){
    this.router.navigate(['./pages/home'])
 }
}

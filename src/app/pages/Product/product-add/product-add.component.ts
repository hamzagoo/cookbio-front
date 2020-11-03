import { Component, OnInit } from '@angular/core'; 
import { Product } from '../product';
import { ProductService } from '../product-service';


@Component({
  selector: 'ngx-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  selectedFile: File;
  public product: Product = new Product(); 
  imageUrl: any;

  constructor(private productService : ProductService) {

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  save(){ 
    this.productService.addProduct(this.product).subscribe(
      (data:Product) =>{
        console.log(data);
      },
      (error: any) => { console.log(error); }
    )
  }

  ngOnInit() { 
  }

}

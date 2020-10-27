import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private baseUrl: string;
  
    constructor(
      private http: HttpClient
    ) {  }

    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(productUrl);
    }

    getProductById(id: number):Observable<Product>{
    
      return this.http.get<Product>(productUrl+'/'+id);
  }
    deleteProduct(id: number):Observable<void>{
      return this.http.delete<any>(productUrl + '/' +id);
    }

    addProduct(product: Product):Observable<Product>{
      return this.http.post(productUrl, product,{
        headers: new HttpHeaders({
            'Content-type' : 'application/json'
        })
      });
    }

    updateProduct(id: number,product:Product):Observable<Product>{
      return this.http.put(productUrl + '/' + id, product,{
          headers: new HttpHeaders({
              'Content-type' : 'application/json'
          })
      })
  }
    
  }
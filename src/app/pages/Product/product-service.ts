import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";
import { FormBuilder,Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private baseUrl = 'http://localhost:8080/product';
  
    constructor(
      private http: HttpClient,
      private fb: FormBuilder
    ) {} 

    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl);
    }

    deleteProduct(id : number):Observable<HttpResponse<any>>{
      let parametres = new HttpParams();
      return this.http.delete<any>(`${this.baseUrl}/${id}`, { observe: 'response' });
    }

    addProduct(product: Product):Observable<Product>{
      console.log(product)
      return this.http.post(this.baseUrl, product, {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      });
    }
  
    updateProduct(product:Product):Observable<Product>{
      return this.http.put<Product>(this.baseUrl, { params: {product: product}, observe: 'response' });
    } 

    getbyId(id: number):Observable<Product>{
        return this.http.get<Product>(`${this.baseUrl}/${id}`)
    }
 }

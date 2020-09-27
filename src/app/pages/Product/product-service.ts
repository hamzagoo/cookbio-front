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
    ) {
      this.baseUrl = "http://192.168.1.7:8087/gta/V1/activitee";
    }

    getAllActivitee():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+"/activitees");
    }

    getAllActiviteeByCategorie(id: number):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+"/activitees/%7Bid%7D?id="+id);
  }
    deleteActivitee(id: number):Observable<void>{
      return this.http.delete<any>(this.baseUrl+"/%7Bid%7D?id="+id);
    }

    addActivitee(activitee: Product):Observable<Product>{
      return this.http.post(this.baseUrl, activitee,{
        headers: new HttpHeaders({
            'Content-type' : 'application/json'
        })
      });
    }
    public getById(id: string): Observable<Product> {
      return this.http.get<any>(this.baseUrl + "/%7Bid%7D?id=" + id, {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
      });
    }
    updateActivitee(id: number,activitee:Product):Observable<Product>{
      return this.http.put(this.baseUrl+"/%7Bid%7D?id="+id, activitee,{
          headers: new HttpHeaders({
              'Content-type' : 'application/json'
          })
      })
  }

  getNiceLastUpdatedTime(lastUpdated: Date): String {

    let options: Intl.DateTimeFormatOptions = {
        day: "numeric", month: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit"
    };

    return lastUpdated.toLocaleDateString("en-GB", options) + " " + lastUpdated.toLocaleTimeString("en-GB", options);
}
    
  }
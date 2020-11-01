import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from './evenement';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'http://localhost:8080/evenement  ';

  constructor(
    private http: HttpClient,
  ) {}    
  
  getAll():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(this.baseUrl);
}

delete(id : number | string):Observable<HttpResponse<any>>{
  let parametres = new HttpParams();
  return this.http.delete<any>(this.baseUrl + "/" + id, { observe: 'response' });
}

add(evenement: Evenement):Observable<Evenement>{
  return this.http.post(this.baseUrl, evenement, {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  });
}
}

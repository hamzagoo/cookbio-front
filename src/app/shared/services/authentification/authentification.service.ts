import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/@core/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  login(model: User): Observable<User> {
    var params = new HttpParams().set("username", model.username).set("password", model.password);
    return this.http.get(userUrl +"/login", {params: params})
  }

  setCurrentUser(user){

    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("currentUser"));
  }
}

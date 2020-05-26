import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Advert } from 'src/app/shared/models/advert.model';
import * as $ from 'jquery';
import { User } from './shared/models/user.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { NewAdvert } from './shared/models/newAdvert.model';
import { EditedAdvert } from './shared/models/editedAdvert.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAdverts() {
    return this.http.get<Advert[]>(`${ environment.apiUrlAdvert }getadverts`);
  }

  register(email, password, confirmPassword) {
    let user = new User();
    user.Email = email;
    user.Password = password;
    user.ConfirmPassword = confirmPassword;
    console.log(user);
    return this.http.post(`${environment.apiUrlAccount}register`, user);
  }

  getToken(email, password) {
    let body = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('userName', email);
    body.append('password', password);
    console.log(body.toString());
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    console.log(body);
    return this.http.post<Token>(`${environment.apiUrlToken}`, body.toString(), options );
  }

  getUsersAdverts(token) {
    let options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    return this.http.get<Advert[]>(`${environment.apiUrlAdvert}getusersadverts`, options);
  }

  addAdvert(title, email, phonenumber, description, image, price, token) {
    let dateTime = new Date();
    let advert = new NewAdvert();
    advert.title = title;
    advert.email = email;
    advert.phone = phonenumber;
    advert.description = description;
    advert.dateAndTime = dateTime;
    advert.price = price;
    advert.image = image;
    console.log(advert);
    let options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    
    return this.http.post(`${environment.apiUrlAdvert}postadvert`, advert, options);
  }

  deleteAdvert(id, token) {
    let options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    return this.http.delete(`${environment.apiUrlAdvert}deleteadvert/${id}`, options);
  }

  getAdvert(id) {
    return this.http.get<Advert[]>(`${environment.apiUrlAdvert}getadvertbyid/${id}`);
  }

  editAdvert(id, token, editedAdvert: Advert) {
    let options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    return this.http.put(`${environment.apiUrlAdvert}putadvert/${id}`, editedAdvert, options);
  }
}

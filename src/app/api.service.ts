import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Advert } from 'src/app/shared/models/advert.model';
import * as $ from 'jquery';
import { User } from './shared/models/user.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

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
}

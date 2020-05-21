import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Advert } from 'src/app/shared/models/advert.model';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAdverts() {
    return this.http.get<Advert[]>(`${ environment.apiUrlAdvert }getadverts`);
  }
}

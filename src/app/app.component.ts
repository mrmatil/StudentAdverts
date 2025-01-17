import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Student Adverts';
  isLogged = false;
  name = 'bruh';
  constructor(public local: LocalStorageService, public session: SessionStorageService) { }

  ngOnInit() {
    if (sessionStorage.getItem('user') != null) {
      this.isLogged = true;
      this.name = sessionStorage.getItem('user');
    }
  }

  logout() {
    sessionStorage.clear();
    location.reload();
  }

  
}

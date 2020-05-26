import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  login: string;
  password: string;
  private json;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') != null) {
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
  }

  logging() {
    this.apiService.getToken(this.login, this.password).subscribe(token => {
      this.json = token;
      sessionStorage.setItem('token', this.json.access_token);
      sessionStorage.setItem('user', this.json.userName);
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    },
      error => {
        console.log(error);
        alert("Błąd logowania");
      });
  }
}

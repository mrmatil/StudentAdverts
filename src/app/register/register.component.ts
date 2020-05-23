import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  login: string;
  password: string;
  confirmPassword: string;
  tst;

  private json;

  ngOnInit(): void {
  }

  loglog() {
    console.log(this.password);
  }

  register() {
    this.apiService.register(this.login,this.password,this.confirmPassword).subscribe((data) => {
    this.apiService.getToken(this.login, this.password).subscribe( token => {
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

    },
    error => {
      console.log(error);
      alert("Błąd rejestracji");
    });
  }

}

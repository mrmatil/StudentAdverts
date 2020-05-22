import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  private json;

  ngOnInit(): void {
    //this.apiService.register('bananowy@huopiec44.pl','qwerty','qwerty').subscribe((data) => {
    this.apiService.getToken('bananowy@huopiec44.pl', 'qwerty').subscribe(
      token => {
        //console.log(token);
        this.json = token;       
        sessionStorage.setItem('token', this.json.access_token);
        sessionStorage.setItem('user', this.json.userName);
        console.log(sessionStorage.getItem('token'));
        console.log(sessionStorage.getItem('user'));

      },
      error => {
        console.log(error);
        console.log("XDDDD");
      });

    //});
  }

}

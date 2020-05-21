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

  ngOnInit(): void {
    //this.apiService.register('bananowy@huopiec44.pl','qwerty','qwerty').subscribe((data) => {
    this.apiService.getToken('bananowy@huopiec44.pl', 'qwerty').subscribe(
      token => {
        console.log(token);
      },
      error => {
        console.log(error);
        console.log("XDDDD");
      });

    //});
  }

}

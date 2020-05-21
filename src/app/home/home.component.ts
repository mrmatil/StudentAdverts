import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adverts;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAdverts().subscribe((data) => {
      console.log(data);
      this.adverts = data;
      console.log(this.adverts);
    });
  }
    
}

import { Component, OnInit } from '@angular/core';
import { Advert } from '../shared/models/advert.model';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  advert:Advert[];
  filteredAdvert:Advert[];
  filter:string;

  filterAdverts(filter:string){

    this.filteredAdvert = this.advert.filter(s => s.title.toUpperCase().includes(filter.toUpperCase()));
  }

  ngOnInit(): void {
  this.apiService.getAdverts().subscribe((data) => {
    console.log(data);
    this.advert = data;
    this.filterAdverts('');
    console.log(this.advert);

  });

  if (sessionStorage.getItem('user') != null)
    console.log(sessionStorage.getItem('user'));
  }
}



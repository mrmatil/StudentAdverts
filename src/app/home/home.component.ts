import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { collectExternalReferences } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adverts;
  adverts2;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getAdverts().subscribe((data) => {
      console.log(data);
      this.adverts = data;
      try{this.adverts2 = this.adverts.slice(0, 6);}
      catch(e){
        this.adverts2=this.adverts;
      }
      console.log(this.adverts);
    });

    if (sessionStorage.getItem('user') != null)
      console.log(sessionStorage.getItem('user'));
  }

  detailsAdvert(id) {
    this.router.navigate([`/details/${id}`])
      .then(() => {
        window.location.reload();
      });
  }
    
}

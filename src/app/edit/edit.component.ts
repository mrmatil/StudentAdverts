import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Advert } from '../shared/models/advert.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  advert;
  editedAdvert: Advert;
  title: string;
  email: string;
  phone: number;
  description: string;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.editedAdvert = new Advert();
    this.apiService.getAdvert(this.id).subscribe((data) => {
      this.advert = data;
      this.title = this.advert.title;
      this.email = this.advert.email;
      this.phone = this.advert.phone;
      this.description = this.advert.description;

    },
    error => {
      console.log(error);
      alert("Advert with this number does not exist");
      this.router.navigate(['/myadverts'])
        .then(() => {
          window.location.reload();
        });
    }
    );
  }

  save() {
    this.editedAdvert.title = this.title;
    this.editedAdvert.author = this.advert.author;
    this.editedAdvert.email = this.email;
    this.editedAdvert.phone = this.phone;
    this.editedAdvert.dateAndTime = this.advert.dateAndTime;
    this.editedAdvert.description = this.description;
    this.editedAdvert.id = this.advert.id;
    this.apiService.editAdvert(this.advert.id, sessionStorage.getItem('token'),this.editedAdvert).subscribe(data => {
      this.router.navigate(['/myadverts'])
        .then(() => {
          window.location.reload();
        });
    },
      error => {
        console.log(error);
        alert("Błąd dodawania");
      });
  }

}

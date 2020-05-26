import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myadverts',
  templateUrl: './myadverts.component.html',
  styleUrls: ['./myadverts.component.css']
})
export class MyadvertsComponent implements OnInit {
  adverts;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
    this.apiService.getUsersAdverts(sessionStorage.getItem('token')).subscribe((data) => {
      console.log(data);
      this.adverts = data;
    });
  }

  deleteAdvert(id) {
    if (confirm("Are you sure? ")) {
      this.apiService.deleteAdvert(id, sessionStorage.getItem('token')).subscribe((data) => {
        location.reload();
      },
      error => {
        console.log(error);
        alert("Cannot delete advert");
      });
    }
  }

  editAdvert(id) {
    this.router.navigate([`/edit/${id}`])
      .then(() => {
        window.location.reload();
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title: string;
  email: string;
  phone: number;
  description: string;
  price: number;
  constructor(private apiService: ApiService, private router: Router) { }

  selectedFile: File;
  

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }


  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
  }

  addAdvert() {
    this.apiService.addAdvert(this.title, this.email, this.phone, this.description, this.selectedFile, this.price, sessionStorage.getItem('token')).subscribe(data => {      
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
